import React from 'react';
import './Diary.css';
import testdata from '../../testdata.js';

const Diary = (props) => {
    return (
        <div className="diary">
            <Notes diary={props.diary} />
        </div>

    );
}


const Notes = (props) => {

    let markings = props.diary.slice().map(mark => {
        return (
            <div className="note">
                <h4>{mark.date}</h4>
                <hr />
                <p><em>{mark.note} </em></p>
            </div>
        )
    });

    return (
        <div>
            <ul>{markings}</ul>
        </div>
    );
}

export default Diary;
