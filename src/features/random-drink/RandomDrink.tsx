import { useEffect, useState, type ReactElement } from "react";
import { getRandomDrink } from "../../api/cocktail-service";
import type { Drink } from "../../types/drink";
import { DrinkCard } from "../../components/DrinkCard/DrinkCard";

export const RandomDrink = (): ReactElement => {
  const [randomDrink, setRandomDrink] = useState<Drink | null>(null);

  const fetchRandomDrink = () => {
    getRandomDrink().then((data) => setRandomDrink(data));
  };

  useEffect(() => {
    fetchRandomDrink();
  }, []);
  return (
    <>
      {randomDrink && <DrinkCard drink={randomDrink} />}
      <button className="refresh-button" onClick={() => fetchRandomDrink()}>
        Get another random drink!
      </button>
    </>
  );
};
