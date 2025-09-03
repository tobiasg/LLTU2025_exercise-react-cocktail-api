import type { Drink } from "../types/drink";
import { mapRawCocktailData } from "../utils";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

interface CocktailApiResponse {
  drinks: Drink[];
}

export const getRandomDrink = async (): Promise<Drink | null> => {
  const res = await fetch(`${BASE_URL}/random.php`);
  const data: CocktailApiResponse = await res.json();
  return mapRawCocktailData(data.drinks?.[0] || null) as Drink;
};
