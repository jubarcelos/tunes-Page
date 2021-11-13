import React, { Component } from 'react';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <span>Profile</span>
        <Header />
      </div>
    );
  }
}

export default Profile;
