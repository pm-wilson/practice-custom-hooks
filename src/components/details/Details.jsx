import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharactersByName } from '../../hooks/characters';

const CharacterDetail = () => {
  const { name } = useParams();
  const { loading, character, error } = useCharactersByName(name);

  
  if(loading) return <h1>Loading...</h1>;
  if(error) return <h3>Error, unable to get data</h3>;

  const characterInfo = character[0];
  
  return (
    <div>
      <h3>{characterInfo.name}</h3>
      <img src={characterInfo.image} alt={characterInfo.name}></img>
      <p>Status: {characterInfo.status}</p>
      <p>Description: {characterInfo.description}</p>
    </div>
  );
};

export default CharacterDetail;
