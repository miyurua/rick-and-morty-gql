import { Skeleton } from "../ui/skeleton";

function CharacterCardSkeleton() {
  return (
    <div className="flex border rounded-xl p-4 gap-4 flex-col hover:cursor-pointer duration-500 w-80 h-96">
      <Skeleton className="h-72 w-full rounded-xl bg-slate-200" />
      <div className="flex flex-col gap-4">
        <Skeleton className="h-4 w-5/12 bg-slate-200" />
        <Skeleton className="h-4 w-3/12 bg-slate-200" />
      </div>
    </div>
  );
}

// PropTypes validation if needed for flexibility
CharacterCardSkeleton.propTypes = {
  // Add prop validations if you extend this component in the future
};

export default CharacterCardSkeleton;
