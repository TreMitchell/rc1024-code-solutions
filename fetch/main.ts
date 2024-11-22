interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUser(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const bulbasaur = (await response.json()) as User;

    console.log(bulbasaur);
  } catch (err) {
    console.error('Error:', err);
  }
}

fetchUser();

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function fetchPokemon(): Promise<void> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const bulbasaur = (await response.json()) as Pokemon;

    console.log(bulbasaur);
  } catch (err) {
    console.error('Error:', err);
  }
}

fetchPokemon();
