import React, { FC } from 'react';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { Routes } from './routes/Routes';

const App: FC = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path={Routes.homeLink}>
            {Home}
          </Route>
          <Route path={Routes.loginLink} component={Login}/>
          <Route path={Routes.signupLink}  component={Signup} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
