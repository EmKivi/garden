import React from 'react';
import './Garden.css';
import Listing from '../Listing/Listing';
import NewPlant from '../NewPlant/NewPlant';



//*OK*
//renderöi Garden -näkymän
const Garden = (props) => {

    return (
        <div className="garden" >
            <NewPlant onNewPlant={props.onNewPlant} />

            <div className="garden__section">
                <div className="garden__kasvit">
                    <Listing props={props.kasvit[0]} />
                </div>
                <div className="garden__kasvit">
                    <Listing props={props.kasvit[1]} />
                </div>
                <div className="garden__kasvit">
                    <Listing props={props.kasvit[2]} />
                </div>
            </div>
            <div className="garden__section">
                <div className="garden__kasvit">
                    <Listing props={props.kasvit[3]} />
                </div>
                <div className="garden__kasvit">
                    <Listing props={props.kasvit[4]} />
                </div>
                <div className="garden__kasvit">
                    <Listing props={props.kasvit[5]} />
                </div>
            </div>
            <div className="garden__section">
                <div className="garden__kasvit">
                    <Listing props={props.kasvit[6]} />
                </div>
            </div>

        </div >
    );
}

export default Garden;
