import React from 'react';
import testdata from '../../testdata.js';
import Listing from '../Listing/Listing';
import "./Plant.css";


const Plant = () => {
    return (
        <div className="plant">
            <p>lista istutettavista kasveista,
                <br />tänne tulee istutustoiminto, joka lisää puutarhaan kasvin</p>
            <Listing props={testdata.istuta.slice()} />
        </div>)
}

export default Plant;