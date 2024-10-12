import { Skeleton } from "@/components/ui/skeleton";

const ForecastSkeleton: React.FC = () => {
  return (
    <div className="flex gap-4">
      <Skeleton className="h-28 min-w-48 w-full mb-2" />
      <Skeleton className="h-28 min-w-48 w-full mb-2" />
      <Skeleton className="h-28 min-w-48 w-full mb-2" />
      <Skeleton className="h-28 min-w-48 w-full mb-2" />
      <Skeleton className="h-28 min-w-48 w-full mb-2" />
      <Skeleton className="h-28 min-w-48 w-full mb-2" />
      <Skeleton className="h-28 min-w-48 w-full" />
    </div>
  );
};

ForecastSkeleton.displayName = "ForecastSkeleton";
export default ForecastSkeleton;
