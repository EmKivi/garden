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

import testdata from './testdata.js';

// let list = props.lista.map(name => { return (<li>{name}</li>) });


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: testdata,
      kasvit: testdata.kasvit,
      olio: { name: "odottaa", type: "" }
    };
    this.handleNewPlant = this.handleNewPlant.bind(this);
  }


  // kasvit taulukossa on objekteja, pitäisi selvittää minkä objektin tyyppi vastaa 
  //input objektin tyyppiä, ja lisätä uusi nimi oikean tyyppisen objektin listaan



  //tämä lisää listaan "undefinied" aina väliin
  handleNewPlant(olio) {
    this.setState({ olio });
    let name = olio.name;    
    let storedData = this.state.kasvit.slice();
    storedData[0].lista.push(name);

    this.setState({
      kasvit: storedData
    })
    console.log("passDown called! Uusin lisäys:" + olio.name + " tilan muutos: " + this.state.kasvit[0].lista);

  }



  render() {
    return (

      <Router>
        <div className="App">
          <Header />
          <div className="App__content">
            <Route path="/" exact render={() => <Garden kasvit={this.state.kasvit} pass={this.handleNewPlant} />} />
            <Route path="/weather" exact component={Weather} />
            <Route path="/chores" exact component={Calendar} />
            <Route path="/newtask" exact component={NewTask} />
            <Route path="/diary" exact render={() => <Diary diary={this.state.data.diary} />} />
          </div>
          <Menu />

        </div>
      </Router >
    );
  }
}


export default App;
