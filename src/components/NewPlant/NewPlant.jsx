import React, { Component } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './NewPlant.css';


//*OK*
// NewPlant -komponetti toimii
//PITÄISI VOIDA LUODA UUSI LISTATYYPPI

class NewPlant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: { type: "", name: "" },
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        // preserve the initial state in a new object for emptying  input-field when submitted
        this.baseState = this.state;
    }

    //*OK*
    //event handler, päivittää merkki kerrallaan datan tilaa
    handleInputChange(event) {
        // console.log(event.target.value)
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            data: { ...this.state.data, [name]: value }
        })
    }


    //*OK*
    //käsittelee uuden kasvin ja lähettää pääkomponentille
    handleSubmit(event) {
        event.preventDefault();
        this.setState(this.baseState);
        this.props.onNewPlant(this.state.data)
        console.log("New Plant submitted")
    }


    //*OK*
    render() {

        return (
            <div className="newplant" >
                <form >
                    <input type="text" name="name" value={this.state.data.name}
                        onChange={this.handleInputChange} className="newplant__input" placeholder="lisää uusi kasvi" />
                    <select required name="type" value={this.state.data.type} onChange={this.handleInputChange}> */}
                     {/* <option value="" disabled selected hidden>Valitse...</option> */}
                        <option value="Muut">muu</option>
                        <option value="Yrtit">yrtti</option>
                        <option value="Yksivuotiset">yksivuotinen</option>
                        <option value="Hyötykasvit">hyötykasvi</option>
                        <option value="Vihannekset">vihannes</option>
                        <option value="Sipulikasvit">sipulikasvi</option>
                        <option value="Marjapensaat">marjapensas</option>
                    </select>
                    <AddCircleIcon onClick={this.handleSubmit} className="newplant__icon" style={{ fontSize: 36 }} />
                </form>
            </div>);
    }
}

export default NewPlant;
