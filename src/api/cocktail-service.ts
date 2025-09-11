import type { Drink } from "../types/drink";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

interface CocktailApiResponse {
  drinks: Drink[] | null;
}

const request = async (url: string): Promise<CocktailApiResponse> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP error ${res.status}`);
  return await res.json();
};

export const getRandomDrink = async (): Promise<Drink> => {
  const data = await request(`${BASE_URL}/random.php`);
  if (!data.drinks || !data.drinks[0]) throw new Error("Drink not found");
  return data.drinks[0];
};

export const getDrink = async (id: string): Promise<Drink> => {
  const data = await request(`${BASE_URL}/lookup.php?i=${id}`);
  if (!data.drinks || !data.drinks[0]) throw new Error(`Drink not found`);
  return data.drinks[0];
};

export const searchDrinks = async (name: string): Promise<Drink[]> => {
  if (!name.trim()) return [];
  const data = await request(`${BASE_URL}/search.php?s=${encodeURIComponent(name)}`);
  return data.drinks || [];
};
