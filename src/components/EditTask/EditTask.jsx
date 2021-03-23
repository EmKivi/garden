import React from 'react';
import TaskForm from '../TaskForm/TaskForm';

// EditTask presents the sheet were the user can modify the chosen task and
// move it to the diary when it is done
//child component TaskForm handles submitting the input

const EditTask = (props) => {

    const index = props.data.findIndex(item => item.id === props.match.params.id)
    let itemData = props.data[index];

    return (
        <TaskForm data={itemData} onSubmit={props.onSubmit} onDelete={props.onDelete} onDone={props.onDone}/>
    );
}

export default EditTask;
