import { useContext, type ReactElement } from "react";
import { FavoriteContext } from "./context/FavoriteContext";
import { DrinkCard } from "../../components/DrinkCard/DrinkCard";

export const Favorites = (): ReactElement => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <>
      <section className="favorites">
        {favorites.length === 0 && (
          <div className="no-favorites">
            <p>No favorites found</p>
          </div>
        )}
        {favorites.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </section>
    </>
  );
};
