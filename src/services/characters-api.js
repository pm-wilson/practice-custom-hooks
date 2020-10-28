export const getCharacters = async(page) => {
  const res = await fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=10&page=${page}`);
  const characters = await res.json();

  return characters;
};
