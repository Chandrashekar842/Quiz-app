import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeScore , changeQuestionCount} from '../redux/reducer'

export const Finalscreen = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { score } = useSelector(state => state.selectionChoices)

  const handleClick = () => {
    dispatch(changeScore(0))
    dispatch(changeQuestionCount(50))
    navigate('/')
  }

  return (
    <Box mt={30} >
      <Typography variant='h3' fontWeight='bold' mb={3}>Final Score: {score}</Typography>
      <Button onClick={handleClick}>Back to Settings</Button>
    </Box>
  )
}
