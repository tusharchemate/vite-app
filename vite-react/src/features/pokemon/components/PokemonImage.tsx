import { useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

interface PokemonImageProps {
  imgUrl: string;
  audio: string;
}
const PokemonImage = ({ imgUrl, audio }: PokemonImageProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative bg-gray-200 p-4">
      <img src={imgUrl} className="w-full" alt={`${name} front shiny`} />
      <div className="absolute bottom-0 right-0 text-white px-2 py-1">
        <div
          className="audio-wrapper p-4  rounded-md cursor-pointer "
          onClick={togglePlay}
        >
          {isPlaying ? (
            <FaPauseCircle className="text-4xl text-gray-600" />
          ) : (
            <FaPlayCircle className="text-4xl text-gray-600" />
          )}
          <audio ref={audioRef} src={audio} className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default PokemonImage;
