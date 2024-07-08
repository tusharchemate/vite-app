import { useQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import Pokemons from "../components/Pokemons";
import { ImSpinner } from "react-icons/im";

const fectchPokemonList = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=200"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PokemonContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: pokemonList, isLoading: isPokemonListLoading } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: fectchPokemonList,
  });

  const fetchPokemon = async () => {
    const response = await fetch(`${pokemonList.results[currentIndex].url}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { data: pokemon, isLoading } = useQuery({
    queryKey: ["pokemon", currentIndex],
    enabled: !!pokemonList,
    queryFn: fetchPokemon,
  });

  if (isLoading || isPokemonListLoading) return;

  const handleNext = () => {
    if (currentIndex < pokemonList.results.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Suspense fallback={<ImSpinner />}>
      <Pokemons pokemon={pokemon} next={handleNext} prev={handlePrevious} />
    </Suspense>
  );
};

export default PokemonContainer;
