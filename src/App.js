import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Garden from './components/Garden/Garden';
import Menu from './components/Menu/Menu';
import Weather from './components/Weather/Weather';
import Diary from './components/Diary/Diary';
import Calendar from './components/Calendar/Calendar';
import NewTask from './components/NewTask/NewTask';
import EditTask from './components/EditTask/EditTask';

import testdata from './testdata.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      tasks: testdata.tasks,
      kasvit: testdata.kasvit,
      done: testdata.diary,
      modify: {}

    };
    this.handleNewPlant = this.handleNewPlant.bind(this);
    this.handleNewTask = this.handleNewTask.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
    this.handleTaskDone = this.handleTaskDone.bind(this);
    this.handleModifyTask = this.handleModifyTask.bind(this);
    this.chooseModified = this.chooseModified.bind(this);
  }


  // *OK*
  // lisää uuden kasvin oikeaan listaan  
  handleNewPlant(olio) {
    console.log(olio);
    let storedData = this.state.kasvit.slice();
    for (let i = 0; i < storedData.length; i++) {
      if (storedData[i][0] === olio.type) {
        storedData[i].push(olio.name);
      }
    }
    this.setState({
      kasvit: storedData,
      olio
    })

  }


  // *OK*
  // työntää uuden olion tasks-taulukkoon
  handleNewTask(olio) {
    console.log("App -- handling new task:" + olio.note);
    let storedData = this.state.tasks.slice();
    storedData.push(olio);
    this.setState({ tasks: storedData });
  }


  // *OK*
  // siirtää tehdyn olion päiväkirjaan ja poistaa tehtävälistasta
  handleTaskDone(olio) {
    console.log("App--done!");
    let done = this.state.done.slice();
    let tasks = this.state.tasks.slice();
    for (let i = 0; i < tasks.length; i++) {
      if (olio.id === tasks[i].id) {
        done.push(olio)
      }
    }
    this.setState({ done });
  }


  // *OK*
  handleTaskDelete(id) {
    console.log("App--poisto");
    let tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks });
  }


  // *OK*
  handleModifyTask(modified) {
    let tasks = this.state.tasks.slice();
    tasks = this.state.tasks.filter(task => task.id !== modified.id);
    tasks.push(modified);
    console.log("App--modify task:" + modified.id);
    this.setState({ tasks, modify: modified });
  }



  // *OK*
  chooseModified(modify) {
    this.setState({ modify });
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="App__content">

            <Route path="/" exact render={() =>
              <Garden
                kasvit={this.state.kasvit}
                onNewPlant={this.handleNewPlant} />} />
            <Route path="/weather" exact component={Weather} />
            <Route path="/chores" exact render={() =>
              <Calendar
                chooseModified={this.chooseModified}

                onTaskDone={this.handleTaskDone}
                tasks={this.state.tasks} />}
            />
            <Route path="/newtask" exact render={() =>
              <NewTask onNewTask={this.handleNewTask} />} />

            <Route path="/diary" exact render={() =>
              <Diary diary={this.state.done} />} />
            <Route path="/edittask" render={() =>
              <EditTask
                modify={this.state.modify}
                
                onModifyTask={this.handleModifyTask}
                onTaskDone={this.handleTaskDone}
                onDelete={this.handleTaskDelete} />} />
          </div>
          <Menu />
        </div>
      </Router >
    );
  }
}

export default App;
