import React from 'react';
// import './Diary.css';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const Diary = (props) => {
    return (

        <div className="diary__bg">
          
            <h3>Kirjaukset päiväkirjaan:</h3>
            <div className="diary">

                <Notes diary={props.diary} />
            </div>
        </div>
    );
}


const Notes = (props) => {


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
        <div>
            <ul>{markings}</ul>
        </div>
    );
}

export default Diary;
