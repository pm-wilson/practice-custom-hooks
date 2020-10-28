import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const CharacterItem = ({ name, image, }) => (
  <div className={styles.nameselect}>
    <h3 className={styles.nametag}>{name}</h3>
    <img src={image} alt={name}></img>
  </div>
);

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default CharacterItem;
