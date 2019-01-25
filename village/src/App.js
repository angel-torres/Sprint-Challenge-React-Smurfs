import React, { Component } from 'react';
import axios from 'axios';
import { Route, } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updating: false,
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(res => this.setState({smurfs: res.data}))
    .catch( err => console.log(err) )
  }
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  updateState = (res) => {
    this.setState({
      smurfs: res,
    })
  }

  deleteSmurf = (e, id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => this.setState({smurfs: res.data}))
    .catch( err => console.log(err) )
  }

  goToUpdateForm = (e, id) => {
    this.props.history.push(`/smurf-form/${id}`)
    this.setState({
      updating: true,
    })
  }

  resetForm = (e) => {
    this.setState({
      updating: false,
    })
  }

  render() {
    return (
      <div className="App">
        <Header resetForm={this.resetForm} />
        <Route exact path="/smurf-form" render={ props => <SmurfForm {...props} updating={this.state.updating} updateState={this.updateState} />}/>
        <Route path="/smurf-form/:id" render={ props => <SmurfForm {...props} smurfs={this.state.smurfs} updating={this.state.updating} updateState={this.updateState} />}/>
        <Route exact path="/" render={ props => <Smurfs {...props} goToUpdateForm={this.goToUpdateForm} deleteSmurf={this.deleteSmurf} smurfs={this.state.smurfs} />}/>
        
      </div>
    );
  }
}

export default App;
