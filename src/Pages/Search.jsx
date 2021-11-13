import React, { Component } from 'react';
import Header from '../components/Header';
import LoadingUser from './LoadingUser';
import ShowAlbum from '../components/ShowAlbum';
import shearchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      isButtonDisabled: true,
      searchInput: '',
      changeInput: false,
      isLoading: false,
      resultAPI: '',
      allAlbum: [],
    };
  }

  changeInput = ({ target: { value } }) => {
    this.setState({ searchInput: value }, () => { this.ableButton(); });
  };

  onClicked = (searchInput) => {
    this.setState({ isLoading: true });
    const allAlbum = searchAlbumsAPI(searchInput)
      .then(() => {
        if (allAlbum.length > 0) {
          return this.setState({
            isLoading: false,
            resultAPI: `Resultado de álbuns de: ${artistName}`,
            searchInput: '',
            allAlbum,
          });
        }
        return this.setState({
          isLoading: false,
          resultAPI: 'Nenhum álbum foi encontrado',
          searchInput: '',
        });
      });
  }

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
      isLoading,
      resultAPI,
      allAlbum,
      isButtonDisabled,
    } = this.state;

    const inputArtist = (
      <input
        value={ searchInput }
        onChange={ this.changeInput }
        type="text"
        name="searchInput"
        id="searchInput"
        data-testid="search-artist-input"
        placeholder="Artista"
        minLength="2"
      />
    );
    const searchAlbum = (
      <div>
        <form className="form" action="search" method="GET">
          <fieldset>
            <label htmlFor="searchInput">
              O que você procura:
              { inputArtist }
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
      </div>
    );

    return (
      <div
        data-testid="page-search"
      >
        <span>Search</span>
        <Header />
        <div>
          { isLoading ? <LoadingUser /> : searchAlbum }
        </div>
      </div>
    );
  }
}

export default Search;
