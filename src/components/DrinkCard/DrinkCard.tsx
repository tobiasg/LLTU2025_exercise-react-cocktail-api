import type { ReactElement } from "react";
import type { Drink } from "../../types/drink";

interface DrinkCardProps {
  drink: Drink;
}

export const DrinkCard = ({ drink }: DrinkCardProps): ReactElement => {
  return (
    <>
      <section className="drink-card">
        <figure className="drink-card-image">
          <img src={`${drink.thumbnail}`} alt="" />
        </figure>
        <p className="category">{drink.category}</p>
        <p className="heading">{drink.name}</p>
        <p className="subcategory">{drink.alcoholic ? "Alcoholic" : "Non-alcoholic"}</p>
      </section>
    </>
  );
};
