import { createBrowserRouter } from "react-router";
import App from "./App";
import { RandomDrink } from "./features/random-drink/RandomDrink";
import { DrinkDetails } from "./features/drink-details/DrinkDetails";
import { Favorites } from "./features/favorites/Favorites";
import { Search } from "./features/search/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <RandomDrink /> },
      { path: "drink/:id", element: <DrinkDetails /> },
      { path: "favorites", element: <Favorites /> },
      { path: "search", element: <Search /> },
    ],
  },
]);
