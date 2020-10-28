import React from 'react';
import PropTypes from 'prop-types';
import { useCharacters } from '../../hooks/characters';
import CharacterItem from './CharacterItem';
import { Link } from 'react-router-dom';
import styles from './styles.css';

const CharacterList = ({ page }) => {
  const { loading, characters, error } = useCharacters(page);
  
  if(loading) return <h2>Loading...</h2>;
  if(error) return <h2>Error, unable to get data</h2>;

  const characterElements = characters.results.map(character => (
    <div key={character.name} className={styles.namearea} >
      <Link to={`/details/${character.name}`}>
        <CharacterItem {...character} />
      </Link>
    </div>
  ));

  return (
    <div data-testid="characters">
      {characterElements}
    </div>
  );
};

CharacterList.propTypes = {
  page: PropTypes.number
};

export default CharacterList;
