import { Games, PokemonImage, PokemonInfo, PokemonName } from "../index";
import { Pokemon } from "../../../common/pokemon";

interface PokemonsProps {
  pokemon: Pokemon;
}

const Pokemons = ({ pokemon }: PokemonsProps) => {
  const { name, abilities, cries, weight, height, game_indices, sprites } =
    pokemon;
  const imgUrl = sprites?.other?.dream_world?.front_default;

  return (
    <div>
      <PokemonName name={name} />
      <div className=" grid grid-cols-2 gap-4">
        <PokemonImage imgUrl={imgUrl} audio={cries?.latest} />
        <div className="bg-gray-100 p-4">
          <PokemonInfo height={height} weight={weight} abilities={abilities} />
          <Games games={game_indices} />
        </div>
      </div>
    </div>
  );
};
export default Pokemons;
