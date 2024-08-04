import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { LocationByIDsData } from "./types";
import { GET_LOCATION_BY_ID } from "@/gql/queries/Queries";
import CharacterCard from "../common/CharacterCard";

const SingleLocation = () => {
  const { id } = useParams();
  const { loading, data } = useQuery<LocationByIDsData>(GET_LOCATION_BY_ID, {
    variables: { ids: id },
  });
  const currentLocation = data?.locationsByIds[0];

  return (
    !loading && (
      <div className="flex flex-col p-5 items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-4xl font-bold text-center">
            Location -{" "}
            <span className="text-green-900">{currentLocation?.name}</span>
          </p>
          <p className="text-2xl">Dimension - {currentLocation?.dimension}</p>
          <p className="text-2xl">Type - {currentLocation?.type}</p>
        </div>
        <p className="text-4xl font-semibold">Characters</p>
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
          {currentLocation?.residents.map((character) => (
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

export default SingleLocation;
