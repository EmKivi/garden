import React, { Component } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './NewPlant.css';


class NewPlant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: { type: undefined, name: undefined }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            // käytä datan sisältöä purettuna ja liitä siihen uusin
            ...this.state.data,
            data: { [name]: value }
        });
    }

    // ottaa sisään objektina inputin tiedot
    //kutsuu pääkomponentin handleNewPlant() funktiota
    handleSubmit(event) {

        event.preventDefault();
        console.log("lähetä lomake");

        this.props.pass(this.state.data);
    }



    render() {

        return (
            <div className="newplant">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.data.name} onChange={this.handleInputChange} className="newplant__input" placeholder="lisää uusi kasvi" />
                    <select name="type" value={this.state.data.type} onChange={this.handleInputChange} >
                        <option value="yrtit">yrtti</option>
                        <option value="yksivuotiset">yksivuotinen</option>
                        <option value="hyotykasvit">hyötykasvi</option>
                        <option value="vihannekset">vihannes</option>
                        <option value="sipulikasvit">sipulikasvi</option>
                        <option value="marjapensaat">marjapensas</option>
                    </select>
                    {/* <button type="submit" onClick={this.handleSubmit} className="newplant__icon" >+</button> */}
                    <AddCircleIcon type="submit" onClick={this.handleSubmit} className="newplant__icon" style={{ fontSize: 36 }} />

                </form>

            </div>);
    }
}

export default NewPlant;