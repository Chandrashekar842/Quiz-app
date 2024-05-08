import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAxios } from "../hooks/useAxios";
import { useSelector } from "react-redux";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    question_count,
  } = useSelector((state) => state.selectionChoices);

  let apiUrl = `/api.php?amount=${question_count}`;

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }

  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }

  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading } = useAxios({ url: apiUrl });

  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.data.results.length) {
      const question = response.data.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(getRandomInt(answers.length), 0, question.correct_answer);
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4">Question {questionIndex + 1}</Typography>
      <Typography mt={5}>
        {response.data.results[questionIndex].question}
      </Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button variant="contained">{data}</Button>
        </Box>
      ))}
      <Box mt={5}>Score: 2/5</Box>
    </Box>
  );
};
