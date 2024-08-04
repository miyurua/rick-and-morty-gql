import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../../gql/queries/Queries";
import { Data } from "./types";
import { Skeleton } from "../ui/skeleton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const AllCharacters = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { loading, error, data } = useQuery<Data>(GET_ALL_CHARACTERS, {
    variables: { page: currentPage },
  });

  const navigate = useNavigate();

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex items-center justify-center p-5 flex-col">
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

      <Pagination className="py-5">
        <PaginationContent>
          <PaginationItem
            onClick={() => {
              currentPage === 1
                ? setCurrentPage(1)
                : setCurrentPage(currentPage - 1);
            }}
            className="hover:cursor-pointer"
          >
            <PaginationPrevious />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              isActive
              onClick={() => {
                setCurrentPage(currentPage);
              }}
              className="hover:cursor-pointer"
            >
              {currentPage}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
              className="hover:cursor-pointer"
            >
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                setCurrentPage(currentPage + 2);
              }}
              className="hover:cursor-pointer"
            >
              {currentPage + 2}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem
            onClick={() => setCurrentPage(currentPage + 1)}
            className="hover:cursor-pointer"
          >
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default AllCharacters;
