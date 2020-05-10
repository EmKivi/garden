import React from 'react';
// import { Link } from 'react-router-dom';
import './Organizer.css';
import TaskCreator from '../TaskCreator/TaskCreator';
import moment from 'moment';



//SORTS TASKS TO 3 LIST BASED ON DATE
const Organizer = (props) => {



    let today = [];
    let late = [];
    let upcoming = [];
    let row = props.tasks;
    let now = moment();
    let due;


    row.sort((a, b) => moment(a.date) - moment(b.date));


    for (let i = 0; i < row.length; i++) {
        due = moment(row[i].date);
        if (due.month() + due.date() + due.year() === now.month() + now.date() + now.year()) {
            today.push(row[i]);
        }
        else if (due > now) {
            upcoming.push(row[i]);
        }
        else {
            late.push(row[i]);
        }
    }


    return (

        <div className="taskfilter">

            <div className="taskfilter__late">
                <h3>Myöhässä</h3>
                <TaskCreator modified={props.modified} onTaskDone={props.onTaskDone} delete={props.onDelete} list={late} />
            </div>

            <div className="taskfilter__today">
                <h3>Tänään</h3>
                <TaskCreator modified={props.modified} onTaskDone={props.onTaskDone} delete={props.onDelete} list={today} />
            </div>

            <div className="taskfilter__upcoming">
                <h3>Tulossa</h3>
                <TaskCreator modified={props.modified} onTaskDone={props.onTaskDone} delete={props.onDelete} list={upcoming} />
            </div>
        </div >)
}







export default Organizer;