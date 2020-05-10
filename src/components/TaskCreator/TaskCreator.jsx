import React from 'react';
import { Link } from 'react-router-dom';
import '../TaskFilter/TaskFilter.css';
import moment from 'moment';
import ArrowRight from '@material-ui/icons/ArrowRight';



//KOMPONENTIN NIMI ON HARHAANJOHTAVA
// COMPONENTS: TaskCreator & Task

const TaskCreator = (props) => {

    const handleDone = (olio)=> {
        props.onTaskDone(olio);
    }

    let rows = props.list.map(
        (task) => {
            return ( <Task modified={props.modified}task={task} done={handleDone}  />)});
    return (
        <ul>{rows}</ul>
    )
}


const Task = ({ modified, task }) => {
    return (
        <div className="task">
            <li key={task.id}>
                <div>
                    <div>{moment(task.date).format('D.M.Y').toString()}</div>
                    <div className="taskfilter__icon">
                        <Link to="/edittask"><ArrowRight onClick={() => modified(task)}/></Link>
                    </div>
                </div>
            </li>
            <div><p>{task.note}</p></div>
        </div >
    );
}


export default TaskCreator;