import { useEffect, useState, type ReactElement } from "react";
import type { Drink } from "../../types/drink";
import { searchDrinks } from "../../api/cocktail-service";
import { DrinkCard } from "../../components/DrinkCard/DrinkCard";

export const Search = (): ReactElement => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    searchDrinks(query).then((data) => setDrinks(data));
  }, [query]);

  return (
    <>
      <h3 className="search-results">
        Search results for <span>"{query}"</span>
      </h3>
      {drinks && drinks.length > 0 ? (
        drinks.map((drink) => <DrinkCard key={drink.id} drink={drink} />)
      ) : (
        <p>No results found.</p>
      )}
    </>
  );
};
