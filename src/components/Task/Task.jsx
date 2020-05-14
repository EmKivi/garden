import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Task.css';
import ArrowRight from '@material-ui/icons/ArrowRight';

const Task = props => {
    return (
        <div className="tasklister">
            <li key={props.task.id}>
                <div className="tasklister__row">
                    <div>{moment(props.task.date).format('D.M.Y').toString()}</div>
                    <div className="tasklister__icon">
                        <Link to={"/edittask/" + props.task.id}><ArrowRight style={{ fontSize: 36 }} /></Link>
                    </div>
                </div>
            </li>
            <div><p>{props.task.note}</p></div>
            <br />
        </div >
    );
}


export default Task;