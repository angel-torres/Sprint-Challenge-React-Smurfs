import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <div className="card bg-light mb-3" >
        <div className="card-header">{props.name}</div>
        <div className="card-body">
          <p className="card-title">Citizen Id: {props.id}</p>
          <p className="card-text">Height: {props.height}</p>
          <p className="card-text">Age: {props.age} smurf years old</p>
        </div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button to="/smurf-form" onClick={ e => props.goToUpdateForm(e, props.id) } type="button" className="btn btn-secondary">Update</button>
          <button onClick={ e => props.deleteSmurf(e, props.id) } type="button" className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

