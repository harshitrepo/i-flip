import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Quiz from './Components/Quiz';
import SignInSignupWithLocalStorage from './SignInSignUp/SignInSignUp';
import Dropdown from './Components/Dropdown';
import { Switch } from 'react-router-dom/cjs/react-router-dom';

// import Dropdown from './Dropdown';

function App() {
  return (
    // <div>
    //   <Router>
    //     <Route path="/">Quiz</Route>
    //     <Route path="/quiz" exact component={Quiz} />
    //     {/* <Route path="/dropdown" component={Dropdown} /> */}
    //   </Router>
    //   <SignInSignupWithLocalStorage/>
    // </div>
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
