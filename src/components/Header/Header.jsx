import React from 'react';
import './Header.css';
import logo from './garden.png';
import PersonIcon from '@material-ui/icons/Person';
import HelpIcon from '@material-ui/icons/Help';

//Header includes logo picture, headline
//user icon and help icon alert being currently under development

const Header = () => {
    return (
        <header className="header">
            <img src={logo} className="logo" alt="logo" />
            <div className="header__headline">
                <h1>Huvikumpu</h1>
                <em>puutarhan suunnittelu</em></div>
            <div className="header__icons">
                <PersonIcon onClick={()=>alert("Käyttäjän tietoja ei voi vielä tallentaa.")} />
                <HelpIcon onClick={()=>alert("Ohjeistus tulossa.")}/>
            </div>
        </header>);
}

export default Header;


