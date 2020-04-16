import React, { Component } from 'react';


import { Link } from 'react-router-dom';
import '../TaskFilter/TaskFilter.css';

import moment from 'moment';


// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import ArrowRight from '@material-ui/icons/ArrowRight';



const TaskCreator = (props) => {

    const handleDelete = function (event) {
        event.preventDefault();
        console.log("kazaa");
        // props.delete();
    }

    const handleDone = (olio)=> {
        let send = olio;
        console.log("it is done!" + olio.note)
        props.onTaskDone(olio);
    }



    let rows = props.list.map(
        (task) => {
            return (

                <Task modified={props.modified}task={task} done={handleDone}  />

                // <div className="task">
                //     <Link to="/edittask">
                //         <li key={task.id}>
                //             <div>
                //                 <div>{moment(task.date).format('D.M.Y').toString()}</div>

                //                 <div className="taskfilter__icon">
                //                     <ArrowRight />

                //                     {/* <CreateRoundedIcon /> */}
                //                     {/* <DeleteForeverIcon onClick={() => { if (window.confirm('Haluatko poistaa merkinnän?')) props.onDelete(task.id) }} /> */}
                //                     {/* <DeleteForeverIcon onClick={() => handleDelete} /> */}
                //                     {/* <CheckCircleIcon onClick={handleDone} /> */}
                //                 </div>
                //             </div>
                //             <div>{task.note}</div>
                //         </li>

                //     </Link>
                // </div >

            )
        });

    return (
        <ul>{rows}</ul>
    )
}



const Task = ({ modified, task, onTaskDone, done }) => {

    return (

        <div className="task">

            <li key={task.id}>

                <div>
                    <div>{moment(task.date).format('D.M.Y').toString()}</div>
                    <div className="taskfilter__icon">
                        <Link to="/edittask"><ArrowRight onClick={() => modified(task)}/></Link>
                        {/* <button onClick={() => done(task)}>{task.id}</button> */}

                        {/* <CreateRoundedIcon /> */}
                        {/* <DeleteForeverIcon onClick={() => handleDelete} /> */}
                        {/* <CheckCircleIcon onClick={handleDone} /> */}
                    </div>

                </div>
            </li>
            <div><p>{task.note}</p></div>

        </div >


    );
}



export default TaskCreator;