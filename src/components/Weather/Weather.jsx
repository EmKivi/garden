import React, { Component } from "react";
import './Weather.css';


// const Weather = () => {
//     return (
//         <div className="weather"><p>tänne tulee säätiedot</p></div>
//     );
// }

export default class Weather extends Component {
  state = {
    error: null,
    isLoaded: false,
    data: {}
  };

  //   componentDidMount() {
  //     fetch(
  //       "http://api.weatherstack.com/current?access_key=d62d6cc74e39926236cbd4eae59814cf&query=Turku"
  //     )
  //       .then(res => res.json())
  //       .then(
  //         res => {
  //           this.setState({
  //             isLoaded: true,
  //             data: res
  //           });
  //         },
  //         // Note: it's important to handle errors here
  //         // instead of a catch() block so that we don't swallow
  //         // exceptions from actual bugs in components.
  //         error => {
  //           this.setState({
  //             isLoaded: true,
  //             error
  //           });
  //         }
  //       );
  //   }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="weather">Loading...</div>;
    } else {
      return (
        <div className="weather">
          <br />
          <p>
            {this.state.data.current.weather_descriptions}
            <br />
            feels like:
            {this.state.data.current.feelslike}
            <img src={this.state.data.current.weather_icons} alt="blaa blaa" />
          </p>
        </div>
      );
    }
  }
}


