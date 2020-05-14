import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Task.css';
import Edit from '@material-ui/icons/Edit';

const Task = props => {
    return (
        <>
            <div className="task">

                <li key={props.task.id}>
                    <div className="task__row">
                        <div>{moment(props.task.date).format('D.M.Y').toString()}</div>
                        <br />
                        <p>{props.task.note}</p>
                    </div>
                </li>

                <div className="task__icon">
                    <Link to={"/edittask/" + props.task.id}><Edit style={{ fontSize: 42 }} /></Link>
                </div>
            </div >
            <hr className="task__hr" />
        </>
    );
}


export default Task;