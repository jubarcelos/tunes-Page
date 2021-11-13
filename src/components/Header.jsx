import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

        <div>
          <Link data-testid="link-to-search" to="/search"> Search </Link>
          <Link data-testid="link-to-favorites" to="/favorites"> Favorites </Link>
          <Link data-testid="link-to-profile" to="/profile"> Profile </Link>
        </div>
      </header>
    );
  }
}

export default Header;
