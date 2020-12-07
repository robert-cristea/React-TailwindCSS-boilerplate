import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';

import "./css/tailwind.output.css";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Switch>
          <Redirect from="/" exact to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
