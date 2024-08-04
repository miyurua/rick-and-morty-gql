import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Data } from "./types";
import { GET_ALL_EPISODES } from "@/gql/queries/Queries";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { useNavigate } from "react-router-dom";
import { Input } from "../ui/input";

const AllEpisodes = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentSearch, setCurrentSearch] = useState<string>("");

  const navigate = useNavigate();
  const { data } = useQuery<Data>(GET_ALL_EPISODES, {
    variables: {
      page: currentPage,
      filter: {
        name: currentSearch,
      },
    },
  });

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
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
        {data?.episodes.results.map((episode) => (
          <div
            className="flex border rounded-xl p-4 gap-4 flex-col hover:cursor-pointer hover:bg-slate-200 duration-500"
            onClick={() => {
              navigate(`/all-episodes/${episode.id}`);
            }}
          >
            <p className="font-semibold">{episode.name}</p>
            <p>
              Episode - <span className="font-semibold">{episode.episode}</span>
            </p>
            <p>Air Date - {episode.air_date}</p>
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

export default AllEpisodes;
