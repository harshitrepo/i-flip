import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { QuizData } from '../Data/QuizData';
import QuizResult from './QuizResult';
import Dropdown from './Dropdown';
import { Button } from '@mui/material';
function Quiz() {
  const history = useHistory();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    const storedScore = localStorage.getItem('quizScore');
    const storedCurrentQuestion = localStorage.getItem('currentQuestion');
    const storedClickedOption = localStorage.getItem('clickedOption');
    const storedShowResult = localStorage.getItem('showResult');

    if (storedScore && storedCurrentQuestion && storedClickedOption && storedShowResult) {
      setScore(Number(storedScore));
      setCurrentQuestion(Number(storedCurrentQuestion));
      setClickedOption(Number(storedClickedOption));
      setShowResult(storedShowResult === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quizScore', score);
    localStorage.setItem('currentQuestion', currentQuestion);
    localStorage.setItem('clickedOption', clickedOption);
    localStorage.setItem('showResult', showResult);
  }, [score, currentQuestion, clickedOption, showResult]);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    
    // setShowResult(false);
    // setCurrentQuestion(0);
    // setClickedOption(0);
    // setScore(0);
    // localStorage.clear();
    history.push('/dropDown');
  };

  const handleSignOut = () => {

    history.push('/');
  };
  const logout = () => {
    localStorage.removeItem("signUp");
    // window.location.reload();
    history.push('/');
  };

  const deleteAccount = () => {
    localStorage.clear();
    // window.location.reload('signUp');
    history.push('/');
  };


  return (

    <div >
     <div  style={{ display :'flex', flexDirection: 'row', alignItems: 'center' ,backgroundColor:'#fe727e',width:'180vh',justifyContent:'flex-end'}}>
          <Button style={{margin:'4px'}} variant="contained" onClick={logout}>Sign Out</Button>
          <Button style={{margin:'10px'}} variant="contained" onClick={deleteAccount}>Delete Account</Button>
        </div>
      <h1 className="heading-txt" style={{ color: 'black', padding: '5px' }
      }> Quiz APP</h1 >
      <div className="container">
        {showResult ? (
          <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} 
            
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    className={`option-btn ${clickedOption === i + 1 ? 'checked' : null}`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion} />

          </>
        )}
      </div>
      {/* <button type='button'
              onClick={handleSignOut}
              style={{
                marginTop: '20px',
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
             }}
            >
              Sign Out
            </button> */}

    </div >
  );
}

export default Quiz;
