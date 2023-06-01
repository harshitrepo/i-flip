import React, { useEffect, useRef, useState } from "react";
import Dropdown from "../Components/Dropdown";
import { Button } from '@mui/material';
function SignInSignupWithLocalStorage() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
//   const localName = localStorage.getItem("name");
  const isLoggedIn = localSignUp && localEmail;
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  }, [localSignUp, localEmail]);

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
    if (email.current.value === localEmail && password.current.value === localPassword) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    } else {
      alert("Please enter valid credentials");
    }
  };

  const handleSignupClick = () => {
    setShowSignupForm(true);
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
  ) : (
    show && (
      <div
        className="container"
        style={{
          background: "#2bc48a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        //   backgroundColor: "#f8f8f8",
          borderRadius: "5px",
        //   padding: "20px",
        //   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        //   marginTop: "20px",
        }}
      >
        <h1 style={{ color: "black", lineHeight: 3 }}>Login for Quiz App</h1>
        <div className="input_space" style={{ lineHeight: 1, marginBottom: "10px" }}>
          <input
            placeholder="Email"
            type="text"
            ref={email}
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>
        <div className="input_space" style={{ lineHeight: 1, marginBottom: "10px" }}>
          <input
            placeholder="Password"
            type="password"
            ref={password}
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>
        <Button variant="contained"
          onClick={handleSignIn}
          style={{
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sign In
        </Button>
        <div style={{ marginTop: "10px" }}>
          {!showSignupForm && (
            <Button variant="contained"
              onClick={handleSignupClick}
              style={{
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "info",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              Sign Up
            </Button>
          )}
        </div>
      </div>
    )
  )}

  {showSignupForm && (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: "5px",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        marginTop: "20px",
      }}
    >
      <div className="input_space" style={{ lineHeight: 1, marginBottom: "10px" }}>
        <input
          placeholder="Name"
          type="text"
          ref={name}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>
      <div className="input_space" style={{ lineHeight: 1, marginBottom: "10px" }}>
        <input
          placeholder="Email"
          type="text"
          ref={email}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>
      <div className="input_space" style={{ lineHeight: 1, marginBottom: "10px" }}>
        <input
          placeholder="Password"
          type="password"
          ref={password}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>
      <button 
        onClick={handleClick}
        style={{
          padding: "10px",
          borderRadius: "5px",
          background:'black',
          backgroundColor: "#4caf50",
          color: "black",
          border: "none",
          cursor: "pointer",
        }}
      >
        Sign Up
      </button>
    </div>
  )}
</div>
);
}

export default SignInSignupWithLocalStorage;
