import React, { Component } from 'react';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <span>Favoritos</span>
        <Header />
      </div>
    );
  }
}

export default Favorites;
