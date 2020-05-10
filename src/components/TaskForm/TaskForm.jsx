import React, { Component } from 'react';
import './TaskForm.css';
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router";


class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state =
            { data: { id: "", date: "", note: "" } }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;

        this.setState({

            data: { ...this.state.data, [name]: value }
        });
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log("NewTask: lähetä lomake" + this.state.data.note + this.state.data.date);
        let data = Object.assign({}, this.state.data);
        data.id = uuidv4();
        this.props.onNewTask(data);
        this.props.history.push("/chores");
    }



    render() {
        return (
            <form className="taskform">
                {this.props.onNewTask ? <p>uusi tehtävä</p> : ""}
                <h3>Luo uusi tehtävä</h3>
                <textarea name="note" value={this.state.data.note} onChange={this.handleInputChange} />
                <input name="date" value={this.state.data.date} onChange={this.handleInputChange} type="date" />
                <div>
                    <button onClick="TODO">palaa</button>
                    <button onClick={this.handleSubmit}>lisää</button>
                </div>
            </form>);
    }
}

export default withRouter(TaskForm);