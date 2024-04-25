import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Selectfield } from '../components/Selectfield'
import { Textfield } from '../components/Textfield'

export const Settings = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <Typography variant='h2' fontWeight='bold' >Quiz App</Typography>
      <form onSubmit={handleSubmit}>
        <Selectfield label="Category" />
        <Selectfield label="Difficulty" />
        <Selectfield label="Type" />
        <Textfield />
        <Box mt={3} width='100%'>
          <Button fullWidth variant='contained' type='submit'>
            Get Started
          </Button>
        </Box>
      </form>
    </div>
  )
}

