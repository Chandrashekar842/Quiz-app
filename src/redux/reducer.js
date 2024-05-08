import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  question_category: "",
  question_difficulty: "",
  question_type: "",
  question_count: 50,
  score: 0,
};

const selectionSlice = createSlice({
  name: "selectionChoices",
  initialState: initialState,
  reducers: {
    changeCategory: (state, action) => {
      return {
        ...state,
        question_category: action.payload,
      };
    },
    changeDifficulty: (state, action) => {
      return {
        ...state,
        question_difficulty: action.payload,
      };
    },
    changeType: (state, action) => {
      return {
        ...state,
        question_type: action.payload,
      };
    },
    changeQuestionCount: (state, action) => {
      return {
        ...state,
        question_count: action.payload,
      };
    },
    changeScore: (state, action) => {
      return {
        ...state,
        score: action.payload,
      };
    },
    defaultCase: (state) => {
        return state
    }
  },
});

export const {
  changeCategory,
  changeDifficulty,
  changeType,
  changeQuestionCount,
  changeScore,
  defaultCase
} = selectionSlice.actions;

export default selectionSlice.reducer;
