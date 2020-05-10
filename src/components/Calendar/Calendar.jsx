import React from 'react';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './Calendar.css';
import TaskFilter from '../TaskFilter/TaskFilter';




const Calendar = (props) => {

    return (
        <div className="calendar">
            <div className="calendar__head">
                <h2>Tehtävälista</h2>
                <Link to="/taskform">
                    <AddCircleIcon className="calendar__add" style={{ fontSize: 50 }} /></Link>
            </div>

            <TaskFilter late={props.late} modified={props.chooseModified} onDelete={props.onDelete} onTaskDone={props.onTaskDone}tasks={props.tasks} />



        </div>
    );
}


export default Calendar;

