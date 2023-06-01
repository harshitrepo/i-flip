import { Typography } from '@mui/material'
import React from 'react'
function QuizResult(props) {
  return (
    <>
    <div className='show-score' >
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
        
        <br/> 
        <br/>
       <Typography variant='h5' color='Green'>
        Your Quiz is completed Succesfully
        </Typography>
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}
export default QuizResult