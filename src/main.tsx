import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryProvider } from "./services/api";
import { Theme, ThemeProvider } from "./components/ThemeProvider";
import App from "./App.tsx";

import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <ThemeProvider defaultTheme={Theme.DARK} storageKey="vite-ui-theme">
          <App />
        </ThemeProvider>
      </QueryProvider>
    </BrowserRouter>
  </StrictMode>
);
