import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
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
        padding: '20px',
        width: '100%',
        minWidth: '224vh',
        height: '100%',
        minHeight: '100vh'


      }}
    >
      <Typography
        variant="h1"
        component="h1"
        color="primary"
        align="center"
        gutterBottom
        sx={{
          // marginBottom: '30px',
          // padding: '30px',
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #FE6B8B 40%, #FF8E53 80%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          height:'5%',
          width:'50%',

        }}
      >
         Quiz Section
      </Typography>

      {/* <h2>quiz</h2> */}
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


