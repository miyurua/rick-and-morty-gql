import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../../gql/queries/Queries";
import { Data } from "./types";
import { Skeleton } from "../ui/skeleton";
import { useNavigate } from "react-router-dom";

const AllCharacters = () => {
  const { loading, error, data } = useQuery<Data>(GET_ALL_CHARACTERS);

  const navigate = useNavigate();

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex items-center justify-center p-5">
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div className="flex flex-col space-y-3" key={index}>
                <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))
          : data?.characters.results.map((character) => (
              <div
                key={character.id}
                className="flex border rounded-xl p-4 gap-4 flex-col hover:cursor-pointer"
                onClick={() => {
                  navigate(`/all-characters/${character.id}`);
                }}
              >
                <div className="relative">
                  <img src={character.image} className="rounded-xl w-full" />
                  {character.status === "Alive" ? (
                    <div className="absolute top-0 right-0 bg-lime-600 text-white p-2 rounded-tr-xl rounded-bl-xl">
                      <p className="font-semibold">
                        {character.status.toUpperCase()}
                      </p>
                    </div>
                  ) : (
                    <div className="absolute top-0 right-0 bg-red-600 text-white p-2 rounded-tr-xl rounded-bl-xl">
                      <p className="font-semibold">
                        {character.status.toUpperCase()}
                      </p>
                    </div>
                  )}
                </div>
                <p className="font-semibold">{character.name}</p>
                <div>
                  <p className="text-sm">Species: {character.species}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default AllCharacters;
