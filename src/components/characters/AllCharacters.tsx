import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../../gql/queries/Queries";
import { Data } from "./types";
import { Button } from "../ui/button";

const AllCharacters = () => {
  const { error, data } = useQuery<Data>(GET_ALL_CHARACTERS);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <p>All Characters</p>
      <div className="grid grid-cols-4 gap-4">
        {data?.characters.results.map((character) => (
          <div
            key={character.id}
            className="flex border rounded-md p-4 gap-4 flex-col"
          >
            <img src={character.image} />
            <p>{character.name}</p>
            <div>
              <p className="text-sm">Species: {character.species}</p>
              <Button className="rounded-xl" variant={"default"} color="blue">
                View
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCharacters;
