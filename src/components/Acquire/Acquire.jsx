import React from 'react';
import './Acquire.css';
import Listing from '../Listing/Listing';
import testdata from '../../testdata.js';
import "./Acquire.css";

const Acquire = () => {
let tools = testdata.hankinnat[0].slice();
let plants = testdata.hankinnat[1].slice();
    return (
        <div className="acquire">
            <p>lista tarpeellisista hankinnoista</p>
            <h3>Työkalut</h3>
            <Listing props={tools} />
            <h3>Kasvit</h3>
            <Listing props={plants} />
        </div>
    );
}

export default Acquire;