import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import LoadingUser from './LoadingUser';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
// import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

// componentDidMount, getMusics() e solicita a musica API musicsAPI.js com 'id do álbum'.
// componentDidUpdate, nome da banda/artista e do album na tela. atributo data-testid="artist-name" / atributo data-testid="album-name".
// ul - li todas as músicas do álbum na tela.

class Album extends Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      isLoading: true,
    };
  }

  // dizendo o caminho de onde vou armazenar o id desse album
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getMusics(id)
      .then((response) => this.setState({
        musics: [...response],
        isLoading: false,
      }));
  }

  render() {
    const {
      musics,
      isLoading,
    } = this.state;

    const nameArtist = !isLoading
      && <p data-testid="artist-name">{ musics[0].artistName }</p>;

    const album = !isLoading
      && <p data-testid="album-name">{ musics[0].collectionName }</p>;

    const albumPicture = !isLoading
    && <img id="album-picture" src={ musics[0].artworkUrl100 } alt="album" />;

    return (
      <div data-testid="page-album">
        Album escolhido!
        <Header />
        { isLoading && <LoadingUser /> }
        { nameArtist }
        { albumPicture }
        { album }
        { !isLoading && musics.filter((music) => music.trackId !== undefined)
          .map((music) => (
            <MusicCard
              key={ music.trackId }
              music={ music }
              musicName={ music.trackName }
              trackId={ music.trackId }
              previewUrl={ music.previewUrl }
              artworkUrl100={ music.artworkUrl100 }
            />
          )) }
      </div>
    );
  }
}

export default Album;

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
