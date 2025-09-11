import { createBrowserRouter } from "react-router";
import App from "./App";
import { RandomDrink } from "./features/random-drink/RandomDrink";
import { DrinkDetails } from "./features/drink-details/DrinkDetails";
import { Favorites } from "./features/favorites/Favorites";
import { Search } from "./features/search/Search";
import { drinkLoader, randomDrinkLoader, searchDrinksLoader } from "./loaders";
import { ErrorBoundary } from "./components/Error/ErrorBoundry";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <RandomDrink />,
        loader: randomDrinkLoader,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "drink/:id",
        element: <DrinkDetails />,
        loader: drinkLoader,
        errorElement: <ErrorBoundary />,
      },
      { path: "favorites", element: <Favorites />, errorElement: <ErrorBoundary /> },
      {
        path: "search",
        element: <Search />,
        loader: searchDrinksLoader,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);
