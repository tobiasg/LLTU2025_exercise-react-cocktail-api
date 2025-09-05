import type { ReactElement } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/Header/Header";

export const App = (): ReactElement => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
