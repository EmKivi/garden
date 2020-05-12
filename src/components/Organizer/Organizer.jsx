import React from 'react';
import { Link } from 'react-router-dom';
import './Organizer.css';
import TaskLister from '../TaskLister/TaskLister';
import moment from 'moment';
import AddCircleIcon from '@material-ui/icons/AddCircle';



//SORTS TASKS TO 3 LIST BASED ON DATE
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
        <div className="calendar">
            <div className="taskfilter">
                <div className="calendar__head">
                    <h2>Tehtävälista</h2>
                    <Link to="/newtask">
                        <AddCircleIcon className="calendar__add" style={{ fontSize: 50 }} /></Link>
                </div>
                <div className="taskfilter__late">
                    <h3>Myöhässä</h3>
                    <TaskLister modified={props.modified} onTaskDone={props.onTaskDone} delete={props.onDelete} list={overdue} />
                </div>

                <div className="taskfilter__today">
                    <h3>Tänään</h3>
                    <TaskLister modified={props.modified} onTaskDone={props.onTaskDone} delete={props.onDelete} list={today} />
                </div>

                <div className="taskfilter__upcoming">
                    <h3>Tulossa</h3>
                    <TaskLister modified={props.modified} onTaskDone={props.onTaskDone} delete={props.onDelete} list={upcoming} />
                </div>
            </div >
        </div >)
}


export default Organizer;


