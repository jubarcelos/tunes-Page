import React, { Component } from 'react';

class LoadingUser extends Component {
  render() {
    return (
      <div className="loading">
        <h2>Carregando...</h2>
        <progress />
      </div>
    );
  }
}

export default LoadingUser;

// Myazaky me mostrou na monitoria como fazer esse progress fofinho, o Mós que ensinou ele.
