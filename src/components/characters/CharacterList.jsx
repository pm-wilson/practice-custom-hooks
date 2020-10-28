import React from 'react';
import PropTypes from 'prop-types';
import { useCharacters } from '../../hooks/characters';
import CharacterItem from './CharacterItem';
import { Link } from 'react-router-dom';

const CharacterList = ({ page }) => {
  const { loading, characters, error } = useCharacters(page);
  
  if(loading) return <h1>Loading...</h1>;
  if(error) return <h3>Error, unable to get data</h3>;

  const characterElements = characters.results.map(character => (
    <div key={character.name}>
      <Link to={`/details/${character.name}`}>
        <CharacterItem {...character} />
      </Link>
    </div>
  ));

  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  page: PropTypes.number
};

export default CharacterList;
