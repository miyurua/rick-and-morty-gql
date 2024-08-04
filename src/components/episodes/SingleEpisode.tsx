import { GET_EPISODE_BY_ID } from "@/gql/queries/Queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { EpisodesByIDsData } from "./types";
import CharacterCard from "../common/CharacterCard";

const SingleEpisode = () => {
  const { id } = useParams();
  const { loading, data } = useQuery<EpisodesByIDsData>(GET_EPISODE_BY_ID, {
    variables: {
      ids: id,
    },
  });
  const currentEpisode = data?.episodesByIds[0];

  return (
    !loading && (
      <div className="flex flex-col p-5 items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-4xl font-bold text-center">
            Episode -{" "}
            <span className="font-semibold text-blue-800">
              {currentEpisode?.name}
            </span>{" "}
            ({currentEpisode?.episode})
          </p>
          <p className="text-2xl">Air Date - {currentEpisode?.air_date}</p>
        </div>
        <p className="text-4xl font-semibold">Characters</p>
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
          {currentEpisode?.characters.map((character) => (
            <CharacterCard
              id={character.id}
              image={character.image}
              status={character.status}
              name={character.name}
              species={character.species}
              key={character.id}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default SingleEpisode;
