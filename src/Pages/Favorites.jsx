import React, { Component } from 'react';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';
import LoadingUser from './LoadingUser';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    getFavoriteSongs()
      .then((response) => this.setState({
        favorites: [...response],
        isLoading: false,
      }));
  }

  render() {
    const { isLoading, favorites } = this.state;
    return (
      <div data-testid="page-favorites">
        <span>Favoritos</span>
        <Header />
        { isLoading && <LoadingUser /> }
        { !isLoading && favorites.filter((favorite) => favorite.trackId !== undefined)
          .map((favorite) => (
            <MusicCard
              key={ favorite.trackId }
              musicName={ favorite.trackName }
              previewUrl={ favorite.previewUrl }
              trackId={ favorite.trackId }
              artworkUrl100={ favorite.artworkUrl100 }
            />
          ))}
      </div>
    );
  }
}
export default Favorites;
