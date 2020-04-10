import React from 'react';


const Listing = ({ props }) => {

    // let moi = props[0].id;
    // tämän pitäisi käsitellä propsina saatu array olioita mutta ei sitä tee

    let list = props.lista.map(name => { return (<li>{name}</li>) });


    return (
        <>
            <h3>{props.tyyppi}</h3>
            <ul>

                {list}
            </ul>
        </>
    )
}

export default Listing;