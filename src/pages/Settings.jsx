import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { Selectfield } from "../components/Selectfield";
import { Textfield } from "../components/Textfield";
import { useAxios } from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

export const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });

  const navigate = useNavigate()

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something went wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True or False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/questions')
  };

  return (
    <div>
      <Typography variant="h2" fontWeight="bold">
        Quiz App
      </Typography>
      <form onSubmit={handleSubmit}>
        <Selectfield
          options={response.data.trivia_categories}
          label="Category"
        />
        <Selectfield options={difficultyOptions} label="Difficulty" />
        <Selectfield options={typeOptions} label="Type" />
        <Textfield />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Get Started!!!
          </Button>
        </Box>
      </form>
    </div>
  );
};
