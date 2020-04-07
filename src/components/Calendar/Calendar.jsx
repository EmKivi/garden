import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './Calendar.css';
import TaskFilter from '../TaskFilter/TaskFilter';


const Calendar = () => {

    return (
        <div className="calendar">
            <h2>Toimet</h2>
            <div>
                <input type="date" />
                <input type="text" />
                <input type="submit" />
                <AddCircleIcon />
            </div>
            <TaskFilter />
        </div>
    );
}


export default Calendar;