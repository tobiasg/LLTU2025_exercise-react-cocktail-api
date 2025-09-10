import type { LoaderFunctionArgs } from "react-router";
import { getDrink, getRandomDrink, searchDrinks } from "./api/cocktail-service";
import type { Drink } from "./types/drink";
import { mapRawCocktailData } from "./utils";

export interface RandomDrinkLoader {
  drink: Promise<Drink>;
}

export interface DrinkLoader {
  drink: Promise<Drink>;
}

export interface SearchDrinksLoader {
  drinks: Promise<Drink[]>;
  query: string;
  currentPage: number;
}

export const randomDrinkLoader = async (): Promise<RandomDrinkLoader> => {
  const drink = getRandomDrink().then(mapRawCocktailData);
  return { drink };
};

export const drinkLoader = async ({ params }: LoaderFunctionArgs): Promise<DrinkLoader> => {
  if (!params.id) throw new Error("Missing drink id");
  const drink = getDrink(params.id).then(mapRawCocktailData);
  return { drink };
};

export const searchDrinksLoader = async ({
  request,
}: LoaderFunctionArgs): Promise<SearchDrinksLoader> => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";
  const currentPage = Number(url.searchParams.get("page") || 1);

  if (!query) return { drinks: Promise.resolve([]), query, currentPage };

  const drinks = searchDrinks(query).then((drinks) => {
    if (!drinks) return [];
    return drinks.map(mapRawCocktailData);
  });

  return { drinks, query, currentPage };
};
