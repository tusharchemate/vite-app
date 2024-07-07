interface PokemonNameProps {
  name: string;
}
const PokemonName = ({ name }: PokemonNameProps) => {
  return (
    <p className="text-gray-700 font-bold h-50 bg-gray-300 w-full flex items-center justify-center mb-10 p-10 text-5xl h-50">
      {name.toUpperCase()}
    </p>
  );
};

export default PokemonName;
