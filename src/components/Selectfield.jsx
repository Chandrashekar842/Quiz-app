import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCategory, changeDifficulty, changeType } from "../redux/reducer";

export const Selectfield = (props) => {
  const { options, label } = props;
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValue(e.target.value);
    switch(label) {
      case "Category":
        dispatch(changeCategory(e.target.value));
        break;
      case "Difficulty":
        dispatch(changeDifficulty(e.target.value));
        break;
      case "Type":
        dispatch(changeType(e.target.value));
        break;
      default:
        return;
    }
  };
  
  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
