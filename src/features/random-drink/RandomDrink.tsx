import { useEffect, useState, type ReactElement } from "react";
import { getRandomDrink } from "../../api/cocktail-service";
import type { Drink } from "../../types/drink";

export const RandomDrink = (): ReactElement => {
  const [randomDrink, setRandomDrink] = useState<Drink | null>(null);

  useEffect(() => {
    getRandomDrink().then((data) => setRandomDrink(data));
  }, []);
  return (
    <>
      <h2>{randomDrink?.name}</h2>
    </>
  );
};
