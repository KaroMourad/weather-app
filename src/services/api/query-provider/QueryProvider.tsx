import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClient } from "@tanstack/react-query";

/**
 * The React Query client instance.
 * @type {QueryClient}
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

/**
 * QueryProvider is a wrapper component that provides the React Query client to the application.
 * @param {React.ReactNode} children - The children components to render.
 * @returns {React.ReactNode} The React Query provider with the children components.
 */
const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools
        buttonPosition="bottom-left"
        position="bottom"
        initialIsOpen={false}
      />
    </QueryClientProvider>
  );
};

export default QueryProvider;
