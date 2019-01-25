import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <h1>Smurf Village Database</h1>
        <hr></hr>
        <NavLink onClick={this.props.resetForm} className="btn btn-secondary btn-md" to="/">Viw Smurfs</NavLink>
        <NavLink onClick={this.props.resetForm} className="btn btn-primary btn-md" to="/smurf-form">Add Smurf</NavLink>
      </div>
    )
  }
}

export default Header;