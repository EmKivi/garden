import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import testdata from './testdata.js';
import './App.css';
import moment from 'moment';

import Header from './components/Header/Header';
import Garden from './components/Garden/Garden';
import Weather from './components/Weather/Weather';
import NewTask from './components/NewTask/NewTask';
import EditTask from './components/EditTask/EditTask';
import Diary from './components/Diary/Diary';
import Menu from './components/Menu/Menu';
import Organizer from './components/Organizer/Organizer';


class App extends Component {

  constructor(props) {
    super(props);

    let tasks = testdata.tasks;
    let notifier = 0;

    // leimataan myöhässä olevat late=true  arvolla
    let now = moment();
    let due;
    for (let i = 0; i < tasks.length; i++) {
      due = moment(tasks[i].date);

      if (due.isSame(now, "day")) {
        // today.push(tasks[i]);
        console.log(tasks[i].date + "tänään");
      }
      else if (due.isBefore()) {
        tasks[i].late = true;
        notifier++;
      }
    }


    console.log(notifier);


    this.state = {
      tasks: tasks,
      kasvit: testdata.kasvit,
      done: testdata.diary,
      notifier: notifier

    };
    this.handleNewPlant = this.handleNewPlant.bind(this);
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
    this.handleTaskDone = this.handleTaskDone.bind(this);

  }

  //***OK***
  // adds new plant to the chosen list
  // lisää uuden kasvin oikeaan listaan  
  handleNewPlant(olio) {
    console.log("New plant handled");

    let storedData = this.state.kasvit.slice();

    if (olio.type === "") {
      storedData[6].push(olio.name);
    }
    else {
      for (let i = 0; i < storedData.length; i++) {
        if (storedData[i][0] === olio.type) {
          storedData[i].push(olio.name);
        }
      }
    }


    this.setState({
      kasvit: storedData,
      olio
    })
  }


  // ***OK***

  handleTaskSubmit(olio) {

    let storedData = this.state.tasks.slice();
    const index = storedData.findIndex(item => item.id === olio.id);
    if (index >= 0) {
      storedData[index] = olio
    } else { storedData.push(olio) }
    this.setState({ tasks: storedData });
  }



  // moves the task to the diary when it's modified to be done
  // siirtää tehdyn olion päiväkirjaan ja poistaa tehtävälistasta

  handleTaskDone(item) {
    console.log("App--done!");
    let done = this.state.done.slice();
    let log = this.state.tasks.find(task => task.id === item.id);
    done.push(log);

    this.handleTaskDelete(item);
    this.setState({ done });
  }


  // ***OK***
  //deletes task
  handleTaskDelete(item) {
    console.log("App--poisto");
    let tasks = this.state.tasks.filter(task => task.id !== item.id);
    let notifier = this.state.notifier;
    if (item.late) {
      notifier--;
    }

    this.setState({ tasks, notifier });
  }



  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="App__content">

            <Route path="/" exact render={() => <Garden
              kasvit={this.state.kasvit}
              onNewPlant={this.handleNewPlant} />} />

            <Route path="/weather" exact component={Weather} />

            <Route path="/chores" exact render={() => <Organizer
              tasks={this.state.tasks} />} />

            <Route path="/newtask" exact render={() => <NewTask
              onSubmit={this.handleTaskSubmit} />} />

            <Route path="/edittask/:id" render={(props) => <EditTask
              onSubmit={this.handleTaskSubmit}
              data={this.state.tasks}
              onDelete={this.handleTaskDelete}
              onDone={this.handleTaskDone}
              {...props} />} />

            <Route path="/diary" exact render={() => <Diary
              diary={this.state.done} />} />

          </div>
          <Menu count={this.state.notifier} />
        </div>
      </Router >
    );
  }
}

export default App;
