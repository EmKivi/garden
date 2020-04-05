import React from 'react';
import testdata from '../../testdata.js';
import Listing from '../Listing/Listing';
import etana from './etana.png';
import './Weeds.css';

const Weeds = () => {
    return (
        <div className="weeds">
            <div>
                <h3>rikkakasvit:</h3>
                <Listing props={testdata.rikkakasvit.slice()} />
            </div>

            <div>

                <h3>tuholaiset: </h3>
                <Listing props={testdata.tuholaiset.slice()} />
            </div>
            <img src={etana} alt="snail" />
        </div>);
}

export default Weeds;

