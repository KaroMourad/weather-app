import React from "react";
import { AddressSectionProps } from "./AddressSection.types";
import { useFetchAddress } from "./hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorBoundary } from "@/components";

const AddressSection: React.FC<AddressSectionProps> = ({ coords }) => {
  const { data, isLoading, error } = useFetchAddress(coords);
  return (
    <ErrorBoundary>
      <section className="mt-4">
        {isLoading ? (
          <Skeleton className="h-full min-h-16 w-96" />
        ) : error ? (
          <p className="text-red-500">{error.message}</p>
        ) : (
          !!data && (
            <h2 className="text-2xl font-bold">
              {`${data.display_name}`}
              <p className="text-sm mt-2">
                {`${coords?.latitude}, ${coords?.longitude}`}
              </p>
            </h2>
          )
        )}
      </section>
    </ErrorBoundary>
  );
};

AddressSection.displayName = "AddressSection";
export default React.memo(AddressSection);
