import { useContext, type ReactElement } from "react";
import { FavoriteContext } from "./context/FavoriteContext";
import { DrinkCard } from "../../components/DrinkCard/DrinkCard";

export const Favorites = (): ReactElement => {
  const { favorites, remove } = useContext(FavoriteContext);

  return (
    <>
      <section className="favorites">
        {favorites.length === 0 && <p>No favorites found</p>}
        {favorites.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </section>
    </>
  );
};
