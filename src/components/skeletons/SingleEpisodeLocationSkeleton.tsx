import { Skeleton } from "../ui/skeleton";
import CharacterCardSkeleton from "./CharacterCardSkeleton";

const SingleEpisodeLocationSkeleton = () => {
  return (
    <div className="flex flex-col p-5 items-center justify-center gap-5">
      {/* Episode Title and Air Date */}
      <div className="flex flex-col items-center justify-center gap-5">
        <Skeleton className="h-10 w-[300px] bg-slate-200 rounded" />
        <Skeleton className="h-6 w-[200px] bg-slate-200 rounded" />
      </div>

      {/* Characters Header */}
      <Skeleton className="h-10 w-[200px] bg-slate-200 rounded" />

      {/* Characters Grid */}
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
        {Array(8) // Adjust the number of skeleton cards as needed
          .fill(null)
          .map((_, index) => (
            <CharacterCardSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};

export default SingleEpisodeLocationSkeleton;
