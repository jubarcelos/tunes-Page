import React, { Component } from 'react';
import Header from '../components/Header';

class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <span>Edit</span>
        <Header />
      </div>
    );
  }
}

export default ProfileEdit;
