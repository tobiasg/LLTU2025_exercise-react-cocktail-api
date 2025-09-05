import type { Drink } from "../types/drink";
import { mapRawCocktailData } from "../utils";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

interface CocktailApiResponse {
  drinks: Drink[] | null;
}

const request = async (url: string): Promise<CocktailApiResponse> => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch:", error);
    return { drinks: null };
  }
};

export const getRandomDrink = async (): Promise<Drink | null> => {
  const data = await request(`${BASE_URL}/random.php`);
  if (!data.drinks || !data.drinks[0]) return null;
  return mapRawCocktailData(data.drinks[0]);
};

export const getDrinkDetails = async (id: string): Promise<Drink | null> => {
  const data = await request(`${BASE_URL}/lookup.php?i=${id}`);
  if (!data.drinks || !data.drinks[0]) return null;
  return mapRawCocktailData(data.drinks[0]);
};

export const searchDrinks = async (name: string): Promise<Drink[]> => {
  if (!name.trim()) return [];
  const data = await request(`${BASE_URL}/search.php?s=${encodeURIComponent(name)}`);
  return data.drinks ? data.drinks.map(mapRawCocktailData) : [];
};
