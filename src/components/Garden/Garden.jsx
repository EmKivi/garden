import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './Garden.css';
import testdata from '../../testdata.js';
import Listing from '../Listing/Listing';

const Garden = () => {
    return (
        <div className="garden">

            <div className="garden__section">
                <div className="garden__kasvit">
                    <h3>Yrtit</h3>
                    <Listing props={testdata.kasvit.slice()} />
                    <Listing props={testdata.kasvit.slice()} />
                    <Listing props={testdata.kasvit.slice()} />
                    <Listing props={testdata.kasvit.slice()} />
                    <AddCircleIcon className="garden__icon"/>
                </div>


                <div className="garden__kasvit">
                    <h3>Yksivuotiset</h3>
                    <Listing props={testdata.kasvit.slice()} />
                    <Listing props={testdata.kasvit.slice()} />
                    <Listing props={testdata.kasvit.slice()} />
                    <AddCircleIcon className="garden__icon"/>
                </div>

                <div className="garden__kasvit">
                    <h3>Monivuotiset</h3>
                    <Listing props={testdata.kasvit.slice()} />
                    <Listing props={testdata.kasvit.slice()} />
                    <AddCircleIcon className="garden__icon"/>
                </div>

            </div>
            <div className="garden__section">


                <div className="garden__kasvit">
                    <h3>Perennat</h3>
                    <Listing props={testdata.kasvit.slice()} />
                    <Listing props={testdata.kasvit.slice()} />
                    <Listing props={testdata.kasvit.slice()} />
                    <Listing props={testdata.kasvit.slice()} />
                    <div className="garden__icon">
                    <input type="text" size={15}></input>
                    <AddCircleIcon />
                    </div>
                </div>


                <div className="garden__kasvit">
                    <h3>Sipulikasvit</h3>
                    <Listing props={testdata.kasvit.slice()} />
                    <Listing props={testdata.kasvit.slice()} />
                    <Listing props={testdata.kasvit.slice()} />

                    <AddCircleIcon className="garden__icon"/>
                </div>

                <div className="garden__kasvit">
                    <h3>Marjapensaat</h3>
                    <Listing props={testdata.kasvit.slice()} />
                    <Listing props={testdata.kasvit.slice()} />
                    <AddCircleIcon />
                </div>
            </div>
        </div >

    );
}





export default Garden;
