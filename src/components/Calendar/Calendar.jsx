import React from 'react';
import {Link} from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './Calendar.css';
import TaskFilter from '../TaskFilter/TaskFilter';


const Calendar = () => {

    return (
        <div className="calendar">
            <div className="calendar__head"><h2>Toimet</h2> 
            <Link to="/newtask">
            <AddCircleIcon className="calendar__add" style={{ fontSize: 50 }} /></Link></div>
            <TaskFilter  />
           
        </div>
    );
}


export default Calendar;