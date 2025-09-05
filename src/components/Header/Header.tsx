import type { ReactElement } from "react";
import { NavLink } from "react-router";

export const Header = (): ReactElement => {
  return (
    <>
      <header id="header">
        <h1>Cocktails</h1>
        <nav>
          <NavLink to="/">Random drink!</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/search">Search</NavLink>
        </nav>
      </header>
    </>
  );
};
