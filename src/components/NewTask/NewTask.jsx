import React from 'react';
import './NewTask.css';

const NewTask = () => {
    return (
        <div className="newtask">
            <input type="date" />
            <input type="text" />
            <input type="submit" />
        </div>);
}

export default NewTask;