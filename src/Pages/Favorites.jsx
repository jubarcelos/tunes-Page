import React, { Component } from 'react';
import Header from '../components/Header';
// import { getFavoriteSongs } from '../services/favoriteSongsAPI';
// import MusicCard from '../components/MusicCard';
// import LoadingUser from './LoadingUser';

class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <span>Favoritos</span>
        <Header />
        {/* { isLoading && <LoadingUser /> }
        { nameArtist }
        { album }
        { !isLoading && favorites.filter((favorite) => favorite.trackId !== undefined)
          .map((favorite) => (
            <MusicCard
              key={ favorite.trackId }
              musicName={ favorite.trackName }
              previewUrl={ favorite.previewUrl }
            />
          ))} */}
      </div>
    );
  }
}
export default Favorites;
