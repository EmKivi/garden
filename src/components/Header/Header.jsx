import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import logo from './viherpeukku3.png';
import PersonIcon from '@material-ui/icons/Person';
import HelpIcon from '@material-ui/icons/Help';



const Header = () => {
    return (
    <header className="header">
        <h1>Viherpeukku</h1>
        <img src={logo} className="logo" alt="logo" />
        <Link to="/user"><PersonIcon /></Link>
        <HelpIcon />
        {/* <p>suunnittele ja toteuta <br />oma puutarhasi</p> */}
    </header>);
}

export default Header;


