import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LoadingUser from './LoadingUser';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      isButtonDisabled: true,
      searchInput: '',
      isLoading: false,
      artistSearched: false,
    };
  }

  changeInput = ({ target: { value } }) => {
    this.setState({ searchInput: value }, () => { this.ableButton(); });
  };

  ableButton = () => {
    const MINsTRING = 2;
    const { searchInput } = this.state;
    if (searchInput.length < MINsTRING) {
      this.setState({ isButtonDisabled: true });
    } else {
      this.setState({ isButtonDisabled: false });
    }
  }

  onClicked = () => {
    this.callSearch();
    this.setState({
      searchInput: '',
      isLoading: true,
    });
  }

  callSearch = () => {
    const { searchInput } = this.state;
    searchAlbumsAPI(searchInput)
      .then((response) => {
        this.setState({
          isLoading: false,
          artistSearched: searchInput,
          allAlbums: [...response],
        });
      });
  }

  render() {
    const {
      searchInput,
      isLoading,
      isButtonDisabled,
      artistSearched,
      allAlbums,
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

    const searchArtist = (
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

    const hasArtist = artistSearched ? (
      <p>{ `Resultado de álbuns de: ${artistSearched}` }</p>
    ) : '';

    const hasAlbums = (artistSearched && allAlbums.length <= 0);
    return (
      <div
        data-testid="page-search"
      >
        <span>Search</span>
        <Header />
        { isLoading ? <LoadingUser /> : searchArtist }
        { hasArtist }
        <div>
          {allAlbums && allAlbums.map((album) => (
            <div key={ album.collectionId }>
              <Link
                to={ `/album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId}` }
              >
                <p>{album.collectionName}</p>
              </Link>
            </div>
          ))}
        </div>
        { hasAlbums && <span> Nenhum álbum foi encontrado</span>}
      </div>
    );
  }
}

export default Search;
