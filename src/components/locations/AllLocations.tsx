import { useQuery } from "@apollo/client";
import { Data } from "./types";
import { GET_ALL_LOCATIONS } from "@/gql/queries/Queries";
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
import { useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import EpisodeLocationSkeleton from "../skeletons/EpisodeLocationSkeleton";

const AllLocations = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const navigate = useNavigate();

  const { data, loading } = useQuery<Data>(GET_ALL_LOCATIONS, {
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
      <p className="text-4xl font-semibold">All Locations</p>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
        {loading
          ? [...Array(20)].map((_, index) => (
              <EpisodeLocationSkeleton key={index}></EpisodeLocationSkeleton>
            ))
          : data?.locations.results.map((location) => (
              <div
                className="flex border rounded-xl p-4 gap-4 flex-col hover:cursor-pointer hover:bg-slate-200 duration-500  w-80"
                onClick={() => {
                  navigate(`/all-locations/${location.id}`);
                }}
              >
                <p className="font-semibold">{location.name}</p>
                <p>
                  Dimension -{" "}
                  <span className="font-semibold">{location.dimension}</span>
                </p>
                <p>Type - {location.type}</p>
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

export default AllLocations;
