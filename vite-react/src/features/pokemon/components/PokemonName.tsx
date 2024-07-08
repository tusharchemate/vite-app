import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from "react-icons/io5";

interface PokemonNameProps {
  name: string;
  next: () => void;
  prev: () => void;
}
const PokemonName = ({ name, next, prev }: PokemonNameProps) => {
  return (
    <>
      <div className="text-gray-700 font-bold h-50 bg-gray-300 w-full flex items-center justify-center mb-10 p-10 text-5xl h-50 relative">
        <IoArrowBackCircleSharp className="cursor-pointer" onClick={prev} />
        <p className="text-gray-700 font-bold h-50 bg-gray-300 w-full flex items-center justify-center">
          {name.toUpperCase()}
        </p>
        <IoArrowForwardCircleSharp className="cursor-pointer" onClick={next} />
      </div>
    </>
  );
};

export default PokemonName;
