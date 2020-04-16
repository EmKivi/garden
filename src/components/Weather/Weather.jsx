import React, { Component } from "react";
import './Weather.css';
import etana from './etana.png';
import HelpIcon from '@material-ui/icons/Help';
import moment from 'moment';


export default class Weather extends Component {
  state = {
    error: null,

    isLoaded: false,
    data: {}

    // isLoaded: true,
    // data: { current: { temperature: 4, weather_descriptions: "poutaa", feelslike: 3, weather_icons: etana } }
  };

  // componentDidMount() {
  //   fetch(
  //     "http://api.weatherstack.com/current?access_key=d62d6cc74e39926236cbd4eae59814cf&query=Laitila"
  //   )
  //     .then(res => res.json())
  //     .then(
  //       res => {
  //         this.setState({
  //           isLoaded: true,
  //           data: res
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       error => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     );
  // }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="weather">Loading...</div>;
    } else {
      return (
        <div className="weather">
          <h3>Laitila</h3>
          <p>{moment().toString()}</p>
          <h2>{this.state.data.current.temperature ? "+" : ""}
            {this.state.data.current.temperature}</h2>
          <img src={this.state.data.current.weather_icons} alt="weather symbol" />
        
          <h3>
            <em>Tuntuu kuin: {this.state.data.current.feelslike}</em></h3>

          {/* <HelpIcon onClick={() => { alert("tämänhetkinen säätieto on haettu kohteesta WeatherStack REST API osoitteesta https://weatherstack.com/") }} /> */}
        </div>
      );
    }
  }
}


