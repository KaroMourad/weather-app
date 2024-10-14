import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "./components";
import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";

const App: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </RootLayout>
    </Suspense>
  );
};

export default App;
