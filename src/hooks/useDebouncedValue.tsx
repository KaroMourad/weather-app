import { useState, useEffect } from "react";

/**
 * Custom hook that debounces the value. It delays updating the value until after a specified delay time.
 *
 * @template T - The type of the value being debounced.
 * @param {T} value - The value to be debounced (e.g., a search query).
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {T} - The debounced value.
 *
 * @example
 * const debouncedSearchTerm = useDebouncedValue(searchTerm, 500);
 */
export function useDebouncedValue<T>(value: T, delay = 250) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

export default useDebouncedValue;
