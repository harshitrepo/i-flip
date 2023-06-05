import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Dropdown() {
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState('');

  function handleOptionSelect(event) {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  }

  function handleContinue() {
    if (selectedOption === 'Gk Quiz' || selectedOption === 'Programming Quiz') {
      history.push('/quiz');
    }
  }

  

  return (
    <div
      style={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5px',
        width:'190vh',
        minWidth: '20vh',
        minHeight: '20vh',
        height:'510px'
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        color="primary"
        align="center"
        gutterBottom
        sx={{
          marginBottom: '30px',
          padding: '25px',
          fontWeight: 'bold',
          background: 'linear-gradient(65deg, #FE6B8B 80%, #FF8E53 1000%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          height: '25%',
          width: '80%',
        }}
      >
        Quiz Section
      </Typography>

      <select
        style={{
          padding: '22px',
          fontSize: '20px',
          border: 'none',
          borderRadius: '5px',
          marginBottom: '20px',
        }}
        value={selectedOption}
        onChange={handleOptionSelect}
      >
        <option value="">Select an option</option>
        <option value="Gk Quiz">Gk Quiz</option>
        <option value="Programming Quiz">Programming Quiz</option>
      </select>
      <Button style={{ padding: '10px', marginBottom: '30px' }} variant="contained" onClick={handleContinue}>
        Continue
      </Button>

     
    </div>
  );
}

export default Dropdown;
