import React from 'react';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './Calendar.css';
import Organizer from '../Organizer/Organizer';




const Calendar = (props) => {
console.log("Calendar--rendered")
    return (
        
        <div className="calendar">
            <div className="calendar__head">
                <h2>Tehtävälista</h2>
                <Link to="/newtask">
                    <AddCircleIcon className="calendar__add" style={{ fontSize: 50 }} /></Link>
            </div>

            <Organizer modified={props.chooseModified} onDelete={props.onDelete} onTaskDone={props.onTaskDone}tasks={props.tasks} />



        </div>
    );
}


export default Calendar;

