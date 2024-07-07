import { useQuery } from "@tanstack/react-query";

const fetchPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PokemonContainer = () => {
  const { data: pokemon } = useQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon,
  });

  console.log("==data", pokemon);

  return <>I am in container</>;
};

export default PokemonContainer;
