import React from 'react';


//listaa taulukosta kasvit


const Listing = ({ props }) => {

    let list = props.slice();
    list.shift();
    list = list.map((name, index) => { return (<li key={index}>{name}</li>) });

    return (
        <>
            <h3>{props[0]}</h3>
            <ul>
                {list}
            </ul>
        </>
    )
}

export default Listing;