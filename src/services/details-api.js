export async function getDetails(name) {
  const res = await fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`);
  const details = await res.json();

  return details;
}
//https://cors-anywhere.herokuapp.com/
