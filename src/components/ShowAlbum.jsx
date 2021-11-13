import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShowAlbum extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default ShowAlbum;

{/* <section>
  <div>
    { resultAPI }
  </div>
  <div>
    { allAlbum.map((
      {
        collectionId,
        artistName,
        collectionName,
        artworkUrl100,
      },
    ) => {
      <div key={ collectionId }>
        <p>{ artistName }</p>
        <p>{ collectionName }</p>
        <img src={ artworkUrl100 } alt={ artistName } />
        <Link
          data-testid={ `link-to-album-${ collectionId }` }
          to={ `/album/${ collectionId }` }
        >
          Detalhes
        </Link>
      </div>
</section> */}