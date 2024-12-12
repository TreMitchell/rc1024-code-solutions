type Pokemon = {
  number: string;
  name: string;
};

type Props = {
  pokedex: Pokemon[];
};

export default function PokemonList({ pokedex }: Props) {
  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li key={pokemon.number}>{pokemon.name}</li>
      ))}
    </ul>
  );
  /* Can also work as a variable:
  const listItems = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  console.log(listItems);
  return <ul> {listItems} </ul> */
}
