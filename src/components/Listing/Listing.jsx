import React from 'react';

const Listing = ({ props }) => {
    let list = props.map(name => { return (<li>{name}</li>) });
    return (
        <ul>
            {list}
        </ul>
    )
}

export default Listing;