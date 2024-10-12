import React from "react";
import { QueryProvider } from "./services/api";
import { Loading } from "./components";
import { Theme, ThemeProvider } from "./components/ThemeProvider";
import RootLayout from "./layouts/RootLayout";

const Home = React.lazy(() => import("./pages/Home"));

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme={Theme.DARK} storageKey="vite-ui-theme">
      <QueryProvider>
        <RootLayout>
          <main className="relative min-h-dvh h-full flex flex-col p-4 pt-20">
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          </main>
        </RootLayout>
      </QueryProvider>
    </ThemeProvider>
  );
};

export default App;
