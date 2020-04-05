import React from 'react';
import { Link } from 'react-router-dom';
import './Garden.css';
import testdata from '../../testdata.js';
import Listing from '../Listing/Listing';
import etana from './etana.png';


const Garden = () => {
    return (
        <div className="garden">
            <div>
                <div className="garden__wanted">
                    <div className="garden__kasvit">
                        <h3>Kasvit:</h3>
                        <Listing props={testdata.kasvit.slice()} />
                        <Listing props={testdata.kasvit.slice()} />
                        <Listing props={testdata.kasvit.slice()} />
                        <Listing props={testdata.kasvit.slice()} />
                        <Listing props={testdata.kasvit.slice()} />
                    </div>

                    <div className="garden__wanted">
                        <div className="garden__kasvit">
                            <h3>yksivuotiset</h3>
                            <Listing props={testdata.kasvit.slice()} />
                            <Listing props={testdata.kasvit.slice()} />
                            <Listing props={testdata.kasvit.slice()} />
                            <Listing props={testdata.kasvit.slice()} />
                            <Listing props={testdata.kasvit.slice()} />
                        </div>

                    </div>
                </div>
            </div>
            <Link to="/weeds"><img src={etana} alt="snail" /></Link>

        </div>

    );
}

export default Garden;
