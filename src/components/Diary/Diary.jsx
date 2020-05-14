import React from 'react';
import './Diary.css';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const Diary = (props) => {

    let markings = props.diary.slice().map((mark, index) => {

        return (
            <div className="note" key={uuidv4()}>
                <h4>{moment(mark.date).format('D.M.Y').toString()}</h4>
                <hr />
                <p>{mark.note}</p>
            </div>
        )
    });

    return (
        <div className="diary">
            <h3>Kirjaukset päiväkirjaan:</h3>
            <div className="diary__content">
                <ul>{markings}</ul>
            </div>
        </div>
    );
}

export default Diary;
