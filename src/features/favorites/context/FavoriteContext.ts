import { createContext } from "react";
import type { Drink } from "../../../types/drink";

export interface FavoriteContextValue {
  favorites: Drink[];
  add: (drink: Drink) => void;
  remove: (drink: Drink) => void;
  isFavorite: (drink: Drink) => boolean;
}

export const FavoriteContext = createContext<FavoriteContextValue>({} as FavoriteContextValue);
