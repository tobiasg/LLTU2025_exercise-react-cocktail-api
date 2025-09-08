import { useContext, type ReactElement } from "react";
import type { Drink } from "../../types/drink";
import { Link } from "react-router";
import { FavoriteContext } from "../../features/favorites/context/FavoriteContext";

interface DrinkCardProps {
  drink: Drink;
}

export const DrinkCard = ({ drink }: DrinkCardProps): ReactElement => {
  const { add, remove, isFavorite } = useContext(FavoriteContext);

  const handleFavorite = (): void => {
    if (isFavorite(drink)) return remove(drink);

    add(drink);
  };

  const favoriteIconClasses = ["material-symbols-outlined favorite"];
  if (isFavorite(drink)) favoriteIconClasses.push("is-favorite");

  return (
    <>
      <section className="drink-card">
        <span className={favoriteIconClasses.join(" ")} onClick={handleFavorite}>
          favorite
        </span>
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
