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
  drinks: Drink[];
  query: string;
  currentPage: number;
}

export const randomDrinkLoader = async (): Promise<RandomDrinkLoader> => {
  const drink = getRandomDrink().then(mapRawCocktailData);
  return { drink: drink };
};

export const drinkLoader = async ({ params }: LoaderFunctionArgs): Promise<DrinkLoader> => {
  if (!params.id) throw new Error("Missing drink id");
  const drink = getDrink(params.id).then(mapRawCocktailData);
  return { drink: drink };
};

export const searchDrinksLoader = async ({
  request,
  params,
}: LoaderFunctionArgs): Promise<SearchDrinksLoader> => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";
  const currentPage = Number(url.searchParams.get("page") || 1);

  const drinks = query.trim()
    ? await searchDrinks(query).then((drink) => drink.map(mapRawCocktailData))
    : [];

  return { drinks: drinks, query, currentPage };
};
