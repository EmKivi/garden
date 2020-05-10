import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import G_logo from './img/garden.png';
import D_logo from './img/diary.png';
import S_logo from './img/saa.png';
import T_logo from './img/tehtava.png';
import moment from 'moment';

const Menu = (props) => {



  return (
    <div className="menu">
      <Link to="/"><div><img src={G_logo} alt="logo" /></div></Link>
      <Link to="/weather">  <div>  <img src={S_logo} alt="logo" /></div></Link>
      <Link to="/chores"><div>

         <Banner key={props.key} data={props.data} />
        <img src={T_logo} alt="logo" /></div></Link>
      <Link to="/diary"> <div> <img src={D_logo} alt="logo" />    </div></Link>    </div>

  );
}



// sekoilee
const Banner = (props) => {
  let now = moment();
  let due;
  let count = 1;

  for (let i = 0; i < props.data.length; i++) {
    due = moment(props.data[i].date);
    if (due.month() + due.date() + due.year() < now.month() + now.date() + now.year()) {
      count++;
    }
  }
  return (<span className="badge_red">{count}</span>);
}




export default Menu;


