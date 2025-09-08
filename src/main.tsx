import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router";
import { router } from "./router.tsx";
import { FavoriteContextProvider } from "./features/favorites/context/FavoriteContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <FavoriteContextProvider>
    <RouterProvider router={router} />
  </FavoriteContextProvider>
);
