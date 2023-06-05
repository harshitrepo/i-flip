import React, { useEffect, useRef, useState } from "react";
import Dropdown from "../Components/Dropdown";
import { Button } from "@mui/material";
function SignInSignupWithLocalStorage() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");
  const isLoggedIn = localSignUp && localEmail;


  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  });

  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Account created successfully!!");
      window.location.reload();
    }
  };
  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };

  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload('signUp');
  };

  const handleSignIn = () => {
    if (email.current.value == localEmail && password.current.value == localPassword) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    } else {
      alert("Please Enter valid Credential");
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:'center'
    ,
    padding: "40px", 
    backgroundColor: "white",
    border: "1px solid #ddd",
    borderRadius: "45px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    width: "620px",
    height:'570px' 
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "50%",
    padding: "20px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={{ display :'flex', flexDirection: 'column', alignItems: 'flex-end' ,backgroundColor:'#fe727e'}}>
      {isLoggedIn ? (
        <div >
          <Button style={{margin:'4px'}} variant="contained" onClick={logout}>Sign Out</Button>
          <Button style={{margin:'10px'}} variant="contained" onClick={deleteAccount}>Delete Account</Button>
        </div>
      ) : (
        <div>
          {/* <input type="text" ref={email} placeholder="Email" />
                    <input type="password" ref={password} placeholder="Password" />
                    <button onClick={handleSignIn}>Sign In</button> */}
        </div>
      )}

      {showHome ? (
        <Dropdown />
      ) : show ? (
        
        <div style={containerStyle}>

          {/* <h1>Hello {localName}</h1> */}
          <h1 style={{ color: "black", lineHeight: 3 }}>Login for Quiz App</h1>

          <div className="input_space">          
            <input placeholder="Email" type="text" ref={email} style={inputStyle} />
          </div>
          <div className="input_space">
            <input placeholder="Password" type="password" ref={password} style={inputStyle} />
          </div>
          <button onClick={handleSignIn} style={buttonStyle}>
            Sign In
          </button>
        </div>
      ) : (
        <div style={containerStyle}>
        <h1 style={{ color: "black", lineHeight: 3 }}>SignUp for Quiz App</h1>

          <div className="input_space">
            <input placeholder="Name" type="text" ref={name} style={inputStyle} />
          </div>
          <div className="input_space">
            <input placeholder="Email" type="text" ref={email} style={inputStyle} />
          </div>
          <div className="input_space">
            <input placeholder="Password" type="password" ref={password} style={inputStyle} />
          </div>
          <button onClick={handleClick} style={buttonStyle}>
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
}

export default SignInSignupWithLocalStorage;
