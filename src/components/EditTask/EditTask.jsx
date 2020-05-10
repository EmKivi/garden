import React from 'react';
import TaskForm from '../TaskForm/TaskForm';



const EditTask = (props) => {

    const index = props.data.findIndex(item => item.id === props.match.params.id)
    let itemData = props.data[index];

    return (
  
        <TaskForm data={itemData} onSubmit={props.onSubmit} onDelete={props.onDelete} />
    );
}

export default EditTask;
