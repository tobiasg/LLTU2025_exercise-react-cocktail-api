import { useEffect, useState, type ReactElement } from "react";
import { useParams } from "react-router";
import type { Drink } from "../../types/drink";
import { getDrinkDetails } from "../../api/cocktail-service";
import { DrinkDetailsCard } from "../../components/DrinkDetailsCard/DrinkDetailsCard";

export const DrinkDetails = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const [drink, setDrink] = useState<Drink | null>(null);

  const fetchDrink = () => {
    getDrinkDetails(parseInt(id!)).then((data) => setDrink(data));
  };

  useEffect(() => {
    fetchDrink();
  }, []);

  return <>{drink && <DrinkDetailsCard drink={drink} />}</>;
};
