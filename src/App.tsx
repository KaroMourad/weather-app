import React from "react";
import { QueryProvider } from "./services/api";
import { Loading } from "./components";

const Home = React.lazy(() => import("./pages/Home"));

const App: React.FC = () => {
  return (
    <QueryProvider>
      <main className="relative min-h-dvh h-full flex flex-col bg-gray-100 p-4">
        <React.Suspense fallback={<Loading />}>
          <Home />
        </React.Suspense>
      </main>
    </QueryProvider>
  );
};

export default App;
