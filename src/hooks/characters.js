import { useEffect, useState } from 'react';
import { getCharacters } from '../services/characters-api';
import { getDetails } from '../services/details-api';

export const useCharacters = page => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCharacters(page)
      .then(fetchedCharacters => setCharacters(fetchedCharacters))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [page]);

  return {
    loading,
    characters,
    error,
  };
};

export const useCharactersByName = name => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDetails(name)
      .then(fetchedCharacter => setCharacter(fetchedCharacter))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [name]);

  return {
    loading,
    character,
    error,
  };
};
