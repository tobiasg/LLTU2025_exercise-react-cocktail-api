import type { ReactElement } from "react";
import { Outlet } from "react-router";

export const App = (): ReactElement => {
  return (
    <>
      <h1>Cocktails</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
