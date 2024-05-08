import { Box, FormControl, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { changeQuestionCount } from "../redux/reducer";

export const Textfield = () => {

  const dispatch = useDispatch()
  const handleChange = (e) => {
    dispatch(changeQuestionCount(e.target.value))
  };
  
  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          onChange={handleChange}
          variant="outlined"
          label="Number of questions"
          type="number"
          size="small"
        />
      </FormControl>
    </Box>
  );
};
