import { getColors } from "../../common/common";
import { Index } from "../../common/pokemon";

interface GamesProps {
  games: Index[];
}
const Games = ({ games }: GamesProps) => {
  return (
    <div className="max-w-4xl mx-auto p-2 rounded-lg shadow-lg">
      <div className="grid gap m-2 w-full flex flex-column">
        <div className="mb-10 flex-start justify-start font-bold">
          Games
          <div className="flex flex-wrap">
            {games?.map((item, index) => (
              <p
                key={index}
                className={`text-white p-2 m-1 rounded-md mx-auto rounded-md px-2 py-1 mb-2 text-white ${getColors(
                  index
                )}`}
              >
                {item.version?.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
