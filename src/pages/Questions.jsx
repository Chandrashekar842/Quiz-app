import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAxios } from "../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeScore } from "../redux/reducer";
import { decode } from "html-entities";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    question_count,
    score
  } = useSelector((state) => state.selectionChoices);

  const navigate = useNavigate()
  const dispatch = useDispatch()

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

  const handleAnswerClick = (e) => {
    const question = response?.data.results[questionIndex]
    if(question.correct_answer === e.target.textContent) {
      dispatch(changeScore(score + 1))

    } 
    if(questionIndex + 1 < response.data.results.length) {
      setQuestionIndex(questionIndex+1)
    } else {
      navigate('/score')
    }
  }

  return (
    <Box>
      <Typography variant="h4">Question {questionIndex + 1}</Typography>
      <Typography mt={5}>
         {decode(response.data.results[questionIndex].question)}
      </Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id} className='ans'>
          <Button onClick={handleAnswerClick} variant="contained">{decode(data)}</Button>
        </Box>
      ))}
      <Box mt={5}>Score: {score}/ {response?.data.results.length}</Box>
    </Box>
  );
};
