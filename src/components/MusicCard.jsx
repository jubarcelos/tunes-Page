import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingUser from '../Pages/LoadingUser';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

// ul - li todas as músicas do álbum na tela.
// Crie components/MusicCard exibe as propriedades (trackName e previewUrl) da API Music.
// essa tag audio com o atributo deve aparecer em cada item listado.

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      favorita: false,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.checkedIsTrue();
  }

  checkedIsTrue = () => {
    const { music } = this.props;
    getFavoriteSongs()
      .then((response) => {
        if (response.some((song) => song.trackId === music.trackId)) {
          this.setState({
            isLoading: false,
            favorita: true,
          });
        }
      });
  }

  // na monitoria o victor me ajudou a visualizar que eu não precisava armazenar o response e apenas manipular.
  // e a fazer a logica ainda dentro da função, desde que antes de setar o novo estado.
  // juntos percebemos que se eu não setar somente uma conferência, tenho problemas na condicional.

  changeCheckBoxInput = ({ target: { checked } }) => {
    this.setState({
      favorita: checked,
      isLoading: true,
    }, () => { this.addFavorites(); });
  };

  addFavorites = () => {
    const { music } = this.props;
    addSong(music)
      .then(() => this.setState({
        isLoading: false,
      }));
  }

  render() {
    const { isLoading, favorita } = this.state;
    const { musicName, previewUrl, trackId } = this.props;

    return (
      isLoading ? <LoadingUser />
        : (
          <div>
            <span>{ musicName }</span>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
            </audio>
            <label htmlFor="favorita">
              Favorita
              <input
                data-testid={ `checkbox-music-${trackId}` }
                type="checkbox"
                name="favorita"
                checked={ favorita }
                onChange={ this.changeCheckBoxInput }
              />
            </label>
          </div>
        )
    );
  }
}

export default MusicCard;

MusicCard.propTypes = {
  musicName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.string,
  music: PropTypes.objectOf(PropTypes.any).isRequired,
};

MusicCard.defaultProps = {
  trackId: 'zero',
};

// Guilherme Augusto me ajudou a trazer o 'music' como props, me ensinou a corrigir o bug de album falho com a extensão: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
// tbm me ajudou a corrigir o problema de falha da props com o defaultProps.
