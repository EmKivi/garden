import React from 'react';
import TaskForm from '../TaskForm/TaskForm';



const NewTask = (props) => {
    return (<TaskForm onSubmit={props.onSubmit} />);
}

export default NewTask;
