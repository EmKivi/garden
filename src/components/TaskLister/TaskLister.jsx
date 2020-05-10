import React from 'react';
import { Link } from 'react-router-dom';
import '../Organizer/Organizer.css';
import moment from 'moment';
import ArrowRight from '@material-ui/icons/ArrowRight';




//LUO SIVUN JOLLA KAIKKI TASKIT NÄKYVÄT


const TaskLister = (props) => {

    const handleDone = (olio) => {
        props.onTaskDone(olio);
    }

    let rows = props.list.map(
        (task) => {
            return (<Item modified={props.modified} task={task} done={handleDone} />)
        });
    return (
        <ul>{rows}</ul>
    )
}


const Item = props => {
    return (
        <div className="task">
            <li key={props.task.id}>
                <div>
                    <div>{moment(props.task.date).format('D.M.Y').toString()}</div>
                    <div className="taskfilter__icon">
                        <Link to={"/edittask/" +props.task.id}><ArrowRight  /></Link>
                    </div>
                </div>
            </li>
            <div><p>{props.task.note}</p></div>
        </div >
    );
}


export default TaskLister;