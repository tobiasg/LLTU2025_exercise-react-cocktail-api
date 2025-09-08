import { useEffect, useState, type ReactElement, type ReactNode } from "react";
import type { Drink } from "../../../types/drink";
import { FavoriteContext, type FavoriteContextValue } from "./FavoriteContext";

interface FavoriteContextProviderProps {
  children: ReactNode;
}

export const FavoriteContextProvider = ({
  children,
}: FavoriteContextProviderProps): ReactElement => {
  const [favorites, setFavorites] = useState<Drink[]>(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? (JSON.parse(stored) as Drink[]) : [];
  });

  const add = (drink: Drink): void => {
    if (!isFavorite(drink)) setFavorites([drink, ...favorites]);
  };
  const remove = (drink: Drink): void => setFavorites(favorites.filter((f) => f.id !== drink.id));
  const isFavorite = (drink: Drink): boolean => favorites.some((d) => d.id === drink.id);

  const values: FavoriteContextValue = {
    favorites,
    add,
    remove,
    isFavorite,
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return <FavoriteContext.Provider value={values}>{children}</FavoriteContext.Provider>;
};
