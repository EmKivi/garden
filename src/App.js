import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Garden from './components/Garden/Garden';
import Menu from './components/Menu/Menu';
import Weather from './components/Weather/Weather';
import Diary from './components/Diary/Diary';
import Calendar from './components/Calendar/Calendar';
import NewTask from './components/NewTask/NewTask';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App__content">
          <Route path="/" exact component={Garden} />
          <Route path="/weather" exact component={Weather} />
          <Route path="/chores" exact component={Calendar} />
          <Route path="/newtask" exact component={NewTask} />
          <Route path="/diary" exact component={Diary} />
        </div>
        <Menu />
      </div>
    </Router >
  );
}

export default App;
