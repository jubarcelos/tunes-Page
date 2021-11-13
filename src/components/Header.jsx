import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import LoadingUser from '../Pages/LoadingUser';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    this.retainUserData();
  }

  // vi no getUser que ela é async, então coloquei em async aqui tbm.
  retainUserData = () => {
    getUser()
      .then((user) => {
        this.setState({
          userInput: user.name,
          isLoading: false,
        });
      });
  }

  render() {
    const { userInput, isLoading } = this.state;
    const headerSpan = (
      <span data-testid="header-user-name">
        { userInput }
      </span>);

    return (
      <header data-testid="header-component">
        <h1> Trybe Tunes</h1>
        { isLoading
          ? <LoadingUser />
          : headerSpan }
      </header>
    );
  }
}

export default Header;
