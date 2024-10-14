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
          <React.Suspense fallback={<Loading />}>
            <Home />
          </React.Suspense>
        </RootLayout>
      </QueryProvider>
    </ThemeProvider>
  );
};

export default App;
