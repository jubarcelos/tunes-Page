import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
// import LoadingUser from './LoadingUser';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      changeInput: false,
      isButtonDisabled: true,
    };
  }

  changeInput = ({ target: { value } }) => {
    this.setState({ searchInput: value }, () => { this.ableButton(); });
  };

  // onClicked = () => {
  //   const { searchInput } = this.state;
  //   this.setState({ isLoading: true });
  //   createUser({ name: searchInput })
  //     .then(() => this.setState({ isLoaded: true, isLoading: false }));
  // }

  ableButton = () => {
    const MINsTRING = 2;
    const { searchInput } = this.state;
    if (searchInput.length < MINsTRING) {
      this.setState({ isButtonDisabled: true });
    } else {
      this.setState({ isButtonDisabled: false });
    }
  }

  render() {
    const {
      searchInput,
      changeInput,
      isButtonDisabled,
      onClicked,
    } = this.state;
    const searchAlbum = (
      <form action="search" method="GET">
        <fieldset>
          <label htmlFor="searchInput">
            O que você procura:
            <input
              value={ searchInput }
              onChange={ this.changeInput }
              type="text"
              name="searchInput"
              id="searchInput"
              data-testid="search-artist-input"
              placeholder="Artista - Album - Música"
              minLength="2"
            />
          </label>
          <button
            data-testid="search-artist-button"
            type="submit"
            disabled={ isButtonDisabled }
            onClick={ this.onClicked }
          >
            Pesquisar
          </button>
        </fieldset>
      </form>
    );

    return (
      <div data-testid="page-search">
        <span>Search</span>
        <Header />
        <div>
          { searchAlbum }
          {/* { isLoaded && <Redirect to="/*" /> } */ }
        </div>
      </div>
    );
  }
}

export default Search;
