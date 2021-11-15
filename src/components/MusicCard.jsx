import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ul - li todas as músicas do álbum na tela.
// Crie components/MusicCard exibe as propriedades (trackName e previewUrl) da API Music.
// essa tag audio com o atributo deve aparecer em cada item listado.

class MusicCard extends Component {
  render() {
    const { musicName, previewUrl } = this.props;
    return (
      <div>
        <span>{ musicName }</span>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
      </div>
    );
  }
}

export default MusicCard;

MusicCard.propTypes = {
  musicName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
};
