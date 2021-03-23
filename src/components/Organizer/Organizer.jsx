import React from 'react';
import { Link } from 'react-router-dom';
import './Organizer.css';
import TaskLister from '../TaskLister/TaskLister';
import moment from 'moment';
import AddCircleIcon from '@material-ui/icons/AddCircle';



//renders tasks based on date in three list: overdue, today, upcoming
const Organizer = (props) => {

    let today = [];
    let overdue = [];
    let upcoming = [];
    let tasks = props.tasks;
    let now = moment();
    let due;
    tasks.sort((a, b) => moment(a.date) - moment(b.date));

    for (let i = 0; i < tasks.length; i++) {
        due = moment(tasks[i].date);
        if (due.isSame(now, "day")) {
            today.push(tasks[i]);
            console.log(tasks[i].date + "tänään");
        }
        else if (tasks[i].late) {
            overdue.push(tasks[i])
        }
        else { upcoming.push(tasks[i]) }
    }


    return (
        <div className="organizer">
            <div className="organizer__header">
                <h2>Tehtävälista</h2>
                <Link to="/newtask">
                    <AddCircleIcon className="calendar__add" style={{ fontSize: 50 }} /></Link>
            </div>
            <hr />
            <div className="organizer__late">
                <div className="organizer__section">
                    <h3 style={{textShadow: "2px 2px 6px red"}}>Myöhässä</h3>
                    <TaskLister  modified={props.modified} onTaskDone={props.onTaskDone} delete={props.onDelete} list={overdue} />
                </div>
            </div>
            <hr />
            <div className="organizer__section">
                <h3 >Tänään</h3>
                <TaskLister modified={props.modified} onTaskDone={props.onTaskDone} delete={props.onDelete} list={today} />
            </div>
            <hr />
            <div className="organizer__section">
                <h3 style={{textShadow: "2px 2px 2px  #17CE1C"}}>Tulossa</h3>
                <TaskLister modified={props.modified} onTaskDone={props.onTaskDone} delete={props.onDelete} list={upcoming} />
            </div>
        </div >)
}


export default Organizer;


