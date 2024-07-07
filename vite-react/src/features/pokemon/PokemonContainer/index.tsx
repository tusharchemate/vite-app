import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import Pokemons from "../components/Pokemons";

const fetchPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/blastoise");
  // const response1 = await fetch(
  //   "https://pokeapi.co/api/v2/pokemon?offset=20&limit=200"
  // );

  // console.log("==name", response1);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PokemonContainer = () => {
  const { data: pokemon, isLoading } = useQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon,
  });

  if (isLoading) return <div>Loading...</div>;

  console.log("==data", pokemon);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Pokemons pokemon={pokemon} />
    </Suspense>
  );
};

export default PokemonContainer;
