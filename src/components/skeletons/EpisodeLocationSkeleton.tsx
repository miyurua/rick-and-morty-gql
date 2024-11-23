import { Skeleton } from "../ui/skeleton";

const EpisodeLocationSkeleton = () => {
  return (
    <div className="flex border rounded-xl p-4 gap-4 flex-col w-80">
      <Skeleton className="w-7/12 h-5 bg-slate-200" />
      <Skeleton className="w-1/2 h-4 mt-2 bg-slate-300" />
      <Skeleton className="w-9/12 h-4 mt-2 bg-slate-300" />
    </div>
  );
};

export default EpisodeLocationSkeleton;
