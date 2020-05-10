import React, { Component } from 'react';
import './EditTask.css';
import { withRouter } from "react-router";



//PITÄISI LUODA TASKFORM JOTA KÄYTTÄÄ SEKÄ EDITTASK ETTÄ NEWTASK

class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: { id: "", date: "", note: "" }
        }


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone = this.handleDone.bind(this);

    }



    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;

        this.setState({

            data: { ...this.state.data, [name]: value },

        });
    }


    // käsittelee ja lähettää vai toisen inputeista 
    handleSubmit(event) {
        event.preventDefault();
        console.log("EditTask: lähetä lomake" + this.state.data.note + this.state.data.date);
        this.props.onModifyTask(this.state.data);
        this.props.history.push("/chores");
    }




    handleCancel() {
        this.props.history.push("/chores");
    }

    handleClear(event) {
        event.preventDefault();
        console.log("clearing");
    }

    handleDelete() {

        this.props.onDelete(this.state.data.id);
        this.props.history.push("/chores");
    }

    handleDone() {
        this.props.onTaskDone(this.state.data);
        this.props.history.push("/diary");
        this.props.onDelete(this.state.data.id);
    }



    componenWillMount() {
        this.setState({ modDate: this.props.modify.date });
        console.log("will mount:" + this.props.modify.date)
    }
    componentDidMount() {
        let data = this.props.modify;
        this.setState({ data });
        console.log("did mount:" + this.props.modify.date)
    }

    render() {
        return (
            <form className="edittask">
                <h3>Muokkaa tehtävää</h3>

                <textarea name="note" value={this.state.data.note} onChange={this.handleInputChange} type="text" rows="10" />
                <input name="date" value={this.state.data.date === "" ? this.props.modify : this.state.data.date} onChange={this.handleInputChange} type="date" />
                <div className="edittask__buttons">
                    <button onClick={this.handleCancel} className="edittask__back">palaa</button>
                    <button onClick={() => { if (window.confirm('Haluatko poistaa merkinnän?')) this.handleDelete() }} className="edittask__delete">poista</button>
                    <button onClick={() => { this.handleDone() }} className="edittask__diary">kirjaa</button>
                </div>
                <span onClick={this.handleSubmit} className="edittask__submit" >tallenna</span>
                {/* <button onClick={this.handleSubmit} className="edittask__submit" >tallenna</button> */}

            </form >

        );
    }
}

export default withRouter(EditTask);


