import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Quiz from './Components/Quiz';
import Dropdown from './Components/Dropdown';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import LoginWithLocalStorage from './SignInSignUp/SignInSignUp';
import SignInSignupWithLocalStorage from './SignInSignUp/SignInSignUp';

// import Dropdown from './Dropdown';

function App() {
  return (
  
    <Router>
    <Switch>
      <Route exact path="/">
        <SignInSignupWithLocalStorage/>
      </Route>
      <Route path="/dropDown">
        <Dropdown />
      </Route>
      <Route path="/quiz">
        <Quiz />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
