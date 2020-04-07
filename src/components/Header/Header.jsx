import React from 'react';
import './Header.css';
import logo from './viherpeukku3.png';
import PersonIcon from '@material-ui/icons/Person';
import HelpIcon from '@material-ui/icons/Help';



const Header = () => {
    return (
        <header className="header">
            <img src={logo} className="logo" alt="logo" />
            <h1>Viherpeukku</h1>
            <div className="header__icons">
                <PersonIcon />
                <HelpIcon />
            </div>
        </header>);
}

export default Header;


