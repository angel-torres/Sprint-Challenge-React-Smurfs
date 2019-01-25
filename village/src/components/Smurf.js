import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <div className="card text-white bg-dark mb-3" >
        <div className="card-header">{props.name}</div>
        <div className="card-body">
          <p className="card-title">{props.id} tall</p>
          <p className="card-text">{props.height} smurf years old</p>
          <p className="card-text">{props.age} smurf years old</p>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary">Update</button>
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

