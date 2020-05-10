import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import testdata from './testdata.js';
import './App.css';


import Header from './components/Header/Header';
import Garden from './components/Garden/Garden';
import Weather from './components/Weather/Weather';
import Calendar from './components/Calendar/Calendar';
import NewTask from './components/NewTask/NewTask';
import EditTask from './components/EditTask/EditTask';
import Diary from './components/Diary/Diary';
import Menu from './components/Menu/Menu';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      tasks: testdata.tasks,
      kasvit: testdata.kasvit,
      done: testdata.diary,
      key: 0

    };
    this.handleNewPlant = this.handleNewPlant.bind(this);
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
    // this.notificationCount = this.notificationCount.bind(this);
    // this.handleTaskDone = this.handleTaskDone.bind(this);

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
    this.setState({ tasks: storedData, key: Math.random });
  }



  // moves the task to the diary when it's modified to be done
  // siirtää tehdyn olion päiväkirjaan ja poistaa tehtävälistasta

  // handleTaskDone(olio) {
  //   console.log("App--done!");
  //   let done = this.state.done.slice();
  //   let tasks = this.state.tasks.slice();
  //   for (let i = 0; i < tasks.length; i++) {
  //     if (olio.id === tasks[i].id) {
  //       done.push(olio)
  //     }
  //   }
  //   this.setState({ done });
  // }


  // ***OK***
  //deletes task
  handleTaskDelete(id) {
    console.log("App--poisto");
    let tasks = this.state.tasks.filter(task => task.id !== id);

    this.setState({ tasks, key: Math.random });
  }


  // notificationCount() {
  // let row = this.state.tasks.slice();
  // let now = moment();
  // let due;
  // let count = 1;

  // for (let i = 0; i < row.length; i++) {
  //   due = moment(row[i].date);
  //   if (due.month() + due.date() + due.year() < now.month() + now.date() + now.year()) {
  //     count++;
  //   }
  // }
  // this.setState({ lateCount: count});
  // }


  // let due;

  // for (let i = 0; i < row.length; i++) {
  //     due = moment(row[i].date);
  //     if (due.month() + due.date() + due.year() === now.month() + now.date() + now.year()) {
  //         today.push(row[i]);
  //     }
  //     else if (due > now) {
  //         upcoming.push(row[i]);
  //     }
  //     else {
  //         late.push(row[i]);
  //     }
  // }

  // componentDidMount() {
  //   this.notificationCount();
  // }

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

            <Route path="/chores" exact render={() => <Calendar
              tasks={this.state.tasks} />} />

            <Route path="/newtask" exact render={() => <NewTask
              onSubmit={this.handleTaskSubmit} />} />

            <Route path="/edittask/:id" render={(props) => <EditTask
              onSubmit={this.handleTaskSubmit}
              data={this.state.tasks}
              // onTaskDone={this.handleTaskDone}
              onDelete={this.handleTaskDelete}
              {...props} />} />

            <Route path="/diary" exact render={() => <Diary
              diary={this.state.done} />} />

          </div>
          <Menu key={this.state.key} data={this.state.tasks} />
        </div>
      </Router >
    );
  }
}

export default App;
