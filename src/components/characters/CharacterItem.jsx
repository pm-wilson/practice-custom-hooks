import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, image, }) => (
  <div>
    <h3>{name}</h3>
    <img src={image} alt={name}></img>
  </div>
);

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default CharacterItem;
