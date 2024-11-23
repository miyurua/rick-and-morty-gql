import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../../gql/queries/Queries";
import { Data } from "./types";
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
import { Input } from "../ui/input";
import CharacterCard from "../common/CharacterCard";
import CharacterCardSkeleton from "../skeletons/CharacterCardSkeleton";

const AllCharacters = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentSearch, setCurrentSearch] = useState<string>("");

  const { loading, error, data } = useQuery<Data>(GET_ALL_CHARACTERS, {
    variables: {
      page: currentPage,
      filter: {
        name: currentSearch,
      },
    },
  });

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex items-center justify-center p-5 flex-col gap-5">
      <Input
        type="search"
        placeholder="Search..."
        className="rounded-xl w-full sm:w-1/3 border-slate-300"
        onChange={(e) => {
          setCurrentSearch(e.target.value);
          setCurrentPage(1);
        }}
      />
      <p className="text-4xl font-semibold">All Characters</p>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
        {loading
          ? Array.from({ length: 20 }).map((_, index) => (
              <CharacterCardSkeleton key={index} />
            ))
          : data?.characters.results.map((character) => (
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
