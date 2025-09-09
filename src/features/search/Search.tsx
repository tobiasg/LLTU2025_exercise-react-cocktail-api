import { useState, type FormEventHandler, type ReactElement } from "react";
import { useLoaderData, useSearchParams } from "react-router";
import { DrinkCard } from "../../components/DrinkCard/DrinkCard";
import { Pagination } from "../../components/Pagination/Pagination";
import type { SearchDrinksLoader } from "../../loaders";

export const Search = (): ReactElement => {
  const { drinks, query, currentPage } = useLoaderData<SearchDrinksLoader>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(query);

  const page = currentPage - 1;
  const pageCount: number = Math.ceil(drinks.length / 10);
  const start = page * 10;
  const end = start + 10;

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (inputValue.trim()) {
      setSearchParams({ q: inputValue, page: "1" });
    } else {
      setSearchParams({});
    }
  };

  const handleOnNext = () =>
    setSearchParams({ q: query, page: String(Math.min(page + 1, pageCount - 1) + 1) });
  const handleOnPrevious = () =>
    setSearchParams({ q: query, page: String(Math.max(page - 1, 0) + 1) });

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      {query.trim() && (
        <>
          <h3 className="search-results">
            Search results for <span>"{query}"</span>
          </h3>
          {drinks.length === 0 && <p>No results found</p>}
          {drinks.length > 0 &&
            drinks.slice(start, end).map((drink) => <DrinkCard key={drink.id} drink={drink} />)}
          {pageCount > 1 && (
            <Pagination
              currentPage={page + 1}
              pageCount={pageCount}
              next={handleOnNext}
              previous={handleOnPrevious}
            />
          )}
        </>
      )}
    </>
  );
};
