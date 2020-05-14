import React from 'react';
import Task from '../Task/Task';


//renders list of tasks

const TaskLister = (props) => {

    const handleDone = (olio) => {
        props.onTaskDone(olio);
    }

    let rows = props.list.map(
        (task) => {
            return (<Task modified={props.modified} task={task} done={handleDone} key={task.id} />)
        });


    return (
        <ul>{rows}</ul>
    )
}

export default TaskLister;