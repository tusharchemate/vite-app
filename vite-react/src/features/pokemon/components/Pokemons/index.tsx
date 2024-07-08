import { Games, PokemonImage, PokemonInfo, PokemonName } from "../index";
import { Pokemon } from "../../../common/pokemon";
import PChart from "../Chart";

interface PokemonsProps {
  pokemon: Pokemon;
  next: () => void;
  prev: () => void;
}

const Pokemons = ({ pokemon, next, prev }: PokemonsProps) => {
  const {
    name,
    abilities,
    cries,
    weight,
    height,
    game_indices,
    sprites,
    stats,
  } = pokemon;

  const imgUrl = sprites?.other?.dream_world?.front_default;
  const data = stats?.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
  }));

  const pData = data?.map((item) => item.value);
  const xLabels = data?.map((item) => item.name);

  return (
    <div>
      <PokemonName name={name} next={next} prev={prev} />
      <div className=" grid grid-cols-2 gap-4">
        <PokemonImage imgUrl={imgUrl} audio={cries?.latest} />
        <div className="bg-gray-100 p-4">
          <PokemonInfo height={height} weight={weight} abilities={abilities} />
          <PChart data={pData} labels={xLabels} />
          <Games games={game_indices.slice(0, 12)} />
        </div>
      </div>
    </div>
  );
};
export default Pokemons;
