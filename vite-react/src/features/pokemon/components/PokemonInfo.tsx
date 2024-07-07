import { TbGenderDemiboy, TbGenderDemigirl } from "react-icons/tb";
import { convertKgToLbs, convertToInches } from "../../common/utils";
import { getColors } from "../../common/common";
import { PokemonInfoEnums } from "../../common/constants";
import { Ability } from "../../common/pokemon";

interface PokemonInfoProps {
  height: number;
  weight: number;
  abilities: Ability[];
}
const PokemonInfo = ({ height, weight, abilities }: PokemonInfoProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-2 gap-6 m-2 w-full">
        <div>
          <h2 className="text-lg font-semibold">{PokemonInfoEnums.Height}</h2>
          <p className=" mt-2">{convertToInches(height)}</p>
          <h2 className="text-lg  mt-10 font-semibold">
            {PokemonInfoEnums.Weight}
          </h2>
          {`${convertKgToLbs(weight)} lbs`}
        </div>
        <div>
          <h2 className="text-lg font-semibold">{PokemonInfoEnums.Gender}</h2>
          <p className="flex items-center mt-2 justify-center gap-2">
            <TbGenderDemiboy className=" w-10 h-10" />
            <TbGenderDemigirl className=" w-10 h-10" />
          </p>
          <h2 className="text-lg font-semibold mt-5">
            {PokemonInfoEnums.Abilities}
          </h2>
          <ul className="mt-2">
            {abilities?.map((ability, index) => (
              <li
                className={`rounded-md px-2 py-1 mb-2 text-white ${getColors(
                  index
                )}`}
                key={index}
              >
                {ability.ability.name.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
