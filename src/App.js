import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Garden from './components/Garden/Garden';
import Menu from './components/Menu/Menu';

import Weather from './components/Weather/Weather';
import Acquire from './components/Acquire/Acquire';
import Diary from './components/Diary/Diary';
import Weeds from './components/Weeds/Weeds';
import User from './components/User/User';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App__content">
          <Route path="/" exact component={Garden} />
          <Route path="/weather" exact component={Weather} />
          <Route path="/chores" exact component={Acquire} />
          <Route path="/diary" exact component={Diary} />
          <Route path="/weeds" exact component={Weeds} />
          <Route path="/user" exact component={User} />
        </div>
        <Menu />
      </div>
    </Router >
  );
}

export default App;
