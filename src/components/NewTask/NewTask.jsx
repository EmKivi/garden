import React, { Component } from 'react';
import './NewTask.css';
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router";


class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = { data: { id: "", date: "", note: "" } }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }



    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;

        this.setState({

            data: { ...this.state.data, [name]: value }
        });
    }


    // käsittelee ja lähettää vai toisen inputeista 
    handleSubmit(event) {
        event.preventDefault();
        console.log("NewTask: lähetä lomake" + this.state.data.note + this.state.data.date);
        let data = Object.assign({}, this.state.data);
        data.id = uuidv4();
        this.props.onNewTask(data);
        this.props.history.push("/chores");
    }




    handleCancel() {
        this.props.history.push("/chores");
    }

    handleClear(event) {
        event.preventDefault();
        console.log("clearing");
    }


    render() {
        return (
            <form className="newtask">
                <textarea name="note" value={this.state.data.note} onChange={this.handleInputChange} type="text" rows="10" />
                <input name="date" value={this.state.data.date} onChange={this.handleInputChange} type="date" />
                <div className="newtask__buttons">
                    <button onClick={this.handleCancel} className="newtask__back">palaa</button>
                    <button onClick={this.handleClear} className="newtask__clear">tyhjennä</button>
                    <button type="submit" onClick={this.handleSubmit} className="newtask__submit" >tallenna</button>

                </div>
                {/* {this.props.onDelete ?
                    <div className="newtask__buttons">
                        <DeleteForeverIcon onClick={() => { this.props.onDelete(this.state.data.id) }} />
                    </div> : ""}

} */}
            </form >

        );
    }
}

export default withRouter(NewTask);