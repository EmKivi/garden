import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './Garden.css';
import testdata from '../../testdata.js';
import Listing from '../Listing/Listing';

const Garden = () => {
    return (
        <div className="garden" >
            <div className="garden__add">
                <input type="text" className="garden__input" placeholder="lisää uusi kasvi"/>
                <select name="tyyppi">
                    <option value="yrtit">yrtti</option>
                    <option value="yksivuotiset">yksivuotinen</option>
                    <option value="hyotykasvit">hyötykasvi</option>
                    <option value="vihannekset">vihannes</option>
                    <option value="sipulikasvit">sipulikasvi</option>
                    <option value="marjapensaat">marjapensas</option>

                </select>
                <AddCircleIcon className="garden__icon" style={{ fontSize: 36 }} />
            </div>
            <div className="garden__section">

                <div className="garden__kasvit">
                    <h3>Yrtit</h3>
                    <Listing props={testdata.yrtit} />
                </div>

                <div className="garden__kasvit">
                    <h3>Yksivuotiset</h3>
                    <Listing props={testdata.yksivuotiset} />
                </div>

                <div className="garden__kasvit">
                    <h3>Hyötykasvit</h3>
                    <Listing props={testdata.hyotykasvit} />
                </div>

            </div>

            <div className="garden__section">
                <div className="garden__kasvit">
                    <h3>Vihannekset</h3>
                    <Listing props={testdata.vihannekset} />
                </div>


                <div className="garden__kasvit">
                    <h3>Sipulikasvit</h3>

                    <Listing props={testdata.sipulikasvit} />
                </div>

                <div className="garden__kasvit">
                    <h3>Marjapensaat</h3>
                    <Listing props={testdata.marjapensaat} />


                </div>
            </div>

        </div >

    );
}

const Category = (head, props) => {
    return ({ head });
}





export default Garden;
