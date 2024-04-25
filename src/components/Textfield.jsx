import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const Textfield = () => {

  const handleChange = () => {};

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
