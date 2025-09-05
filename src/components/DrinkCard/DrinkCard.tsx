import type { ReactElement } from "react";
import type { Drink } from "../../types/drink";
import { Link } from "react-router";

interface DrinkCardProps {
  drink: Drink;
}

export const DrinkCard = ({ drink }: DrinkCardProps): ReactElement => {
  return (
    <>
      <section className="drink-card">
        <figure>
          <img src={`${drink.thumbnail}`} alt="" />
        </figure>
        <div className="drink-card-content">
          <p className="category">{drink.category}</p>
          <p className="heading">{drink.name}</p>
          <p className="subcategory">{drink.alcoholic ? "Alcoholic" : "Non-alcoholic"}</p>
        </div>
        <div className="drink-card-actions">
          <Link to={`/drink/${drink.id}`}>View Details</Link>
        </div>
      </section>
    </>
  );
};
