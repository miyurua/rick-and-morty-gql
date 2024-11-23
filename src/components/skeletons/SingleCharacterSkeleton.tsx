import { Skeleton } from "../ui/skeleton";

const SingleCharacterSkeleton = () => {
  return (
    <div className="flex flex-col items-center w-full sm:w-1/4 gap-5">
      {/* Skeleton for the character name */}
      <Skeleton className="h-8 w-3/4 rounded-md bg-slate-200" />

      {/* Skeleton for the character image */}
      <Skeleton className="w-full h-96 rounded-xl bg-slate-200" />

      {/* Skeleton for character information */}
      <div className="flex flex-col justify-start text-lg w-full gap-5">
        <Skeleton className="h-6 w-1/2 rounded-md bg-slate-200" />
        <Skeleton className="h-5 w-full rounded-md bg-slate-200" />
        <Skeleton className="h-5 w-3/4 rounded-md bg-slate-200" />
        <Skeleton className="h-5 w-1/2 rounded-md bg-slate-200" />

        {/* Skeleton for origin information */}
        <div className="flex flex-col justify-start text-lg w-full gap-5 pt-5">
          <Skeleton className="h-6 w-1/3 rounded-md bg-slate-200" />
          <Skeleton className="h-5 w-full rounded-md bg-slate-200" />
          <Skeleton className="h-5 w-3/4 rounded-md bg-slate-200" />
          <Skeleton className="h-5 w-1/2 rounded-md bg-slate-200" />
          <Skeleton className="h-5 w-2/3 rounded-md bg-slate-200" />
        </div>
      </div>
    </div>
  );
};

export default SingleCharacterSkeleton;
