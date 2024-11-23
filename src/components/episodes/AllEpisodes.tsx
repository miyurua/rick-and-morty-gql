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
import EpisodeLocationSkeleton from "../skeletons/EpisodeLocationSkeleton";

const AllEpisodes = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentSearch, setCurrentSearch] = useState<string>("");

  const navigate = useNavigate();
  const { data, loading } = useQuery<Data>(GET_ALL_EPISODES, {
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
      <p className="text-4xl font-semibold">All Episodes</p>

      {/* Grid layout for the episodes */}
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
        {/* Render skeletons if data is loading */}
        {loading
          ? [...Array(20)].map((_, index) => (
              <EpisodeLocationSkeleton key={index}></EpisodeLocationSkeleton>
            ))
          : data?.episodes.results.map((episode) => (
              <div
                key={episode.id}
                className="flex border rounded-xl w-80 p-4 gap-4 flex-col hover:cursor-pointer hover:bg-slate-200 duration-500"
                onClick={() => {
                  navigate(`/all-episodes/${episode.id}`);
                }}
              >
                <p className="font-semibold">{episode.name}</p>
                <p>
                  Episode -{" "}
                  <span className="font-semibold">{episode.episode}</span>
                </p>
                <p>Air Date - {episode.air_date}</p>
              </div>
            ))}
      </div>

      {/* Pagination */}
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
