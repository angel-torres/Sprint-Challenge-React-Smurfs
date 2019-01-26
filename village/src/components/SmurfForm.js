import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  addUpdateSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    if (this.props.updating) {
      axios.put(`http://localhost:3333/smurfs/${this.props.match.params.id}`, this.state)
      .then( res => {
        this.props.updateState(res.data);
        this.props.history.push('/')
      })
      .catch( err => console.log(err))
      return
    } else {
      axios.post('http://localhost:3333/smurfs', this.state)
      .then(res => {
        this.props.updateState(res.data);
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }
  
  componentDidMount() {
    if (this.props.updating) {
      const id = this.props.match.params.id;
      const smurf = this.props.smurfs.find(smurf => `${smurf.id}` === id);

      this.setState({
        name: smurf.name,
        age: smurf.age,
        height: smurf.height
      })
    } else {
      this.setState({
        name: '',
        age: '',
        height: ''
      })
    }
  }



  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addUpdateSmurf}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label col-form-label-lg">Name</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                className="form-control form-control-lg" 
                id="colFormLabelLg" 
                onChange={this.handleInputChange}
                placeholder="name"
                value={this.state.name}
                name="name"
              />
              </div>
            </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label col-form-label-lg">Age</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                className="form-control form-control-lg" 
                id="colFormLabelLg" 
                onChange={this.handleInputChange}
                placeholder="age"
                value={this.state.age}
                name="age"
              />
              </div>
            </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label col-form-label-lg">Height</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                className="form-control form-control-lg" 
                id="colFormLabelLg" 
                onChange={this.handleInputChange}
                placeholder="height"
                value={this.state.height}
                name="height"
              />
              </div>
            </div>

          <button className="btn btn-primary btn-lg" type="submit">{this.props.updating ? "Update" : "Add to the village"}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
