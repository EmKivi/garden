import React, { Component } from 'react';
import './TaskForm.css';
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router";


class TaskForm extends Component {
    constructor(props) {
        super(props);
        const data = props.data ? props.data : {
            id: "", date: "", note: ""
        }

        this.state =
            { data: data };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleReturn = this.handleReturn.bind(this);

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
        data.id = data.id ? data.id : uuidv4();

        this.props.onSubmit(data);
        this.props.history.push("/chores");
    }

    handleReturn() {

        this.props.history.push("/chores");

    }
    handleDelete() {

        this.props.onDelete(this.state.data.id);
        this.props.history.push("/chores");
    }
    render() {
        return (
            <form className="taskform">
                {this.state.data.id ? <h3>Muokkaa tehtävää</h3> : <h3>Luo uusi tehtävä</h3>}

                <textarea name="note" value={this.state.data.note} onChange={this.handleInputChange} />
                <input name="date" value={this.state.data.date} onChange={this.handleInputChange} type="date" />
                <div>
                    <button onClick={this.handleReturn}>palaa</button>

                    <button onClick={this.handleSubmit}>{this.state.data.id ? "TALLENNA" : "LISÄÄ"}</button>


                    {this.props.onDelete ? <button onClick={this.handleDelete}>poista</button> : ""}
                </div>
            </form>);
    }
}

export default withRouter(TaskForm);