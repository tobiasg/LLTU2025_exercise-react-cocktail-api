import { Suspense, type ReactElement } from "react";
import { Await, useLoaderData } from "react-router";
import type { Drink } from "../../types/drink";
import { DrinkDetailsCard } from "../../components/DrinkDetailsCard/DrinkDetailsCard";
import type { DrinkLoader } from "../../loaders";
import { Loading } from "../../components/Loading/Loading";

export const DrinkDetails = (): ReactElement => {
  const { drink } = useLoaderData<DrinkLoader>();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Await resolve={drink}>{(drink: Drink) => <DrinkDetailsCard drink={drink} />}</Await>
      </Suspense>
    </>
  );
};
