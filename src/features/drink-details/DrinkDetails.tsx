import { useEffect, useState, type ReactElement } from "react";
import { useParams } from "react-router";
import type { Drink } from "../../types/drink";

export const DrinkDetails = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const [drink, setDrink] = useState<Drink | null>(null);

  useEffect(() => {}, []);

  return <div></div>;
};
