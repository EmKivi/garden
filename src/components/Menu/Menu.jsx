import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import G_logo from './img/garden.png';
import D_logo from './img/diary.png';
import S_logo from './img/saa.png';
import T_logo from './img/tehtava.png';

const Menu = (props) => {
  return (
    <div className="menu">
      <Link to="/"><div><img src={G_logo} alt="logo" /></div></Link>
      <Link to="/weather">  <div>  <img src={S_logo} alt="logo" /></div></Link>
      <Link to="/chores"><div>


        {props.count > 0 ? <span className="badge_red">{props.count}</span> : ""}
        <img src={T_logo} alt="logo" /></div></Link>
      <Link to="/diary"> <div> <img src={D_logo} alt="logo" />    </div></Link>    </div>

  );
}







export default Menu;


