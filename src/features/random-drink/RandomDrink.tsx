import { Suspense, type ReactElement } from "react";
import type { Drink } from "../../types/drink";
import { DrinkCard } from "../../components/DrinkCard/DrinkCard";
import { Await, useLoaderData, useRevalidator } from "react-router";
import type { RandomDrinkLoader } from "../../loaders";

export const RandomDrink = (): ReactElement => {
  const { drink } = useLoaderData<RandomDrinkLoader>();
  const revalidator = useRevalidator();

  const renderRandomDrink = (drink: Drink) => {
    return (
      <>
        <DrinkCard drink={drink} />
        <button className="refresh-button" onClick={() => revalidator.revalidate()}>
          Get another random drink
        </button>
      </>
    );
  };

  return (
    <>
      <Suspense>
        <Await resolve={drink}>{(drink: Drink) => renderRandomDrink(drink)}</Await>
      </Suspense>
    </>
  );
};
