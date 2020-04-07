import React from 'react';
import testdata from '../../testdata.js';

// SISÄLTÄÄ MYÖS FUNKTIO-KOMPONENTIN "TaskCreator"

const TaskFilter = () => {
   
    let today = [];
    let late = ["myöhässä"];
    let upcoming = [];
    let row = testdata.tasks;


    for (let i = 0; i < row.length; i++) {

        if (Date.parse(row[i].date) < Date.now()) {
            late.push(row[i]);
        }
        else { upcoming.push(row[i]) }
    }

    // if (late.length>0){
    //     alert("tehtäviä on myöhässä!")
    // }

    return (

        <>
            <hr />
            <h3>Myöhässä</h3>
            <TaskCreator props={late} />

            <hr />
            <h3>Tänään</h3>
            <TaskCreator props={today} />
            <hr />
            <h3>Tulossa</h3>
            <TaskCreator props={upcoming} />

        </>)
}

const TaskCreator = ({ props }) => {

    let rows = props.map(
        task => {
            return (
                <li>
                    {task.date}<br />
                    {task.note}
                    <input type="checkbox"/>
                </li>
            )
        });

    return (
        <ul>{rows}</ul>
    )
}

export default TaskFilter;