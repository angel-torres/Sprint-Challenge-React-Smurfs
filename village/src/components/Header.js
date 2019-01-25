import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Smurfs!</h1>
        <Link to="/smurfs">Viw Smurfs</Link>
        <Link to="/form">Add Smurf</Link>
      </div>
    )
  }
}

export default Header;