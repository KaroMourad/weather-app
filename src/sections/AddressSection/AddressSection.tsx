import React from "react";
import { AddressSectionProps } from "./AddressSection.types";
import { useFetchAddress } from "./hooks";
import { Skeleton } from "@/components/ui/skeleton";

const AddressSection: React.FC<AddressSectionProps> = ({ coords }) => {
  const { address, isLoading, error } = useFetchAddress(coords);

  return (
    <section className="py-4 h-24">
      {isLoading ? (
        <Skeleton className="h-full w-full" />
      ) : error ? (
        <p className="text-red-500">{error.message}</p>
      ) : (
        !!address && (
          <h2 className="text-2xl font-bold">
            {`${address.display_name}`}
            <p className="text-sm text-gray-500 mt-2">
              {`${coords?.latitude}, ${coords?.longitude}`}
            </p>
          </h2>
        )
      )}
    </section>
  );
};

AddressSection.displayName = "AddressSection";
export default React.memo(AddressSection);
