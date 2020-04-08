import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import G_logo from './img/garden.png';
import D_logo from './img/diary.png';
import S_logo from './img/saa.png';
import T_logo from './img/tehtava.png';

const Menu = () => {
    return (
        <div className="menu">
            <Link to="/"><img src={G_logo} alt="logo" /></Link>
            <Link to="/weather"> <img src={S_logo} alt="logo" /></Link>
            <Link to="/chores"><img src={T_logo} alt="logo" /></Link>
            <Link to="/diary"><img src={D_logo} alt="logo" /></Link>
            
        </div>
    );
}

export default Menu;