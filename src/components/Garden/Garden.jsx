import React from 'react';
import './Garden.css';
import Listing from '../Listing/Listing';
import NewPlant from '../NewPlant/NewPlant';



//LISTING EI NÄYTÄ JÄRKEVÄLTÄ
//PITÄISI LUODA KOMPONENTTI JOKA ASETTELEE LISTAN OBJEKTIT
//LISTOJEN MÄÄRÄSTÄ RIIPPUMATTA
//WARNING: KEYS

const Garden = (props) => {
    console.log("Garden--rendered");

    return (
        <div className="garden" >

            {/* form for adding new plant to the chosen list */}
            <NewPlant onNewPlant={props.onNewPlant} />

            <div className="garden__section">
                {props.kasvit.map((item, index) =>(
                    <div key={index} className="garden__kasvit">
                    <h3>{item.tyyppi}</h3>
                    <ul>{item.lista.map((name, index) => (
                        <li key={index}>{name}</li>))}
                    </ul>
                  </div>
                ))}
            </div>
        </div >
    );
}

export default Garden;
