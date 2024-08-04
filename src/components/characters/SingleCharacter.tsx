import { GET_CHARACTER_BY_ID } from "@/gql/queries/Queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { CharactersByIdData } from "./types";
import { Skeleton } from "../ui/skeleton";

const SingleCharacter = () => {
  const { id } = useParams();
  const { loading, data } = useQuery<CharactersByIdData>(GET_CHARACTER_BY_ID, {
    variables: { ids: id },
  });
  const currentCharacter = data?.charactersByIds[0];

  return (
    <div className="flex flex-col p-5 items-center justify-center">
      {loading ? (
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full sm:w-1/4 gap-5">
          <p className="text-4xl font-bold text-center">
            {currentCharacter?.name}
          </p>

          <img
            src={currentCharacter?.image}
            alt={currentCharacter?.name}
            className="flex border rounded-xl w-full"
          />
          <div className="flex flex-col justify-start text-lg w-full gap-3">
            {/* character info */}
            <p className="font-semibold">Character Information</p>
            <p>Species - {currentCharacter?.species}</p>
            <p>Gender - {currentCharacter?.gender}</p>
            <p>Current Status - {currentCharacter?.status}</p>
            {/* origin info */}
            {currentCharacter?.origin && (
              <div className="flex flex-col justify-start text-lg w-full gap-3">
                <p className="font-semibold pt-5">Origin</p>
                <p>
                  Created At - {currentCharacter?.origin.created || "unknown"}
                </p>
                <p>
                  Dimension - {currentCharacter?.origin.dimension || "unknown"}
                </p>
                <p>Planet - {currentCharacter.origin.name || "unknown"}</p>
                <p>Type - {currentCharacter.origin.type || "unknown"}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleCharacter;
