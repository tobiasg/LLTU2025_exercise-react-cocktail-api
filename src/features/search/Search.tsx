import {
  Suspense,
  useState,
  type FormEventHandler,
  type ReactElement,
  type ReactNode,
} from "react";
import { Await, useLoaderData, useSearchParams } from "react-router";
import { DrinkCard } from "../../components/DrinkCard/DrinkCard";
import { Pagination } from "../../components/Pagination/Pagination";
import type { SearchDrinksLoader } from "../../loaders";
import { Loading } from "../../components/Loading/Loading";
import type { Drink } from "../../types/drink";

const DRINKS_PER_PAGE = 10;

export const Search = (): ReactElement => {
  const { drinks, query, currentPage } = useLoaderData<SearchDrinksLoader>();
  const [_, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(query);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (inputValue.trim()) {
      setSearchParams({ q: inputValue, page: "1" });
    } else {
      setSearchParams({});
    }
  };

  const renderSearchResults = (drinks: Drink[]): ReactNode => {
    if (!query || !query.trim()) {
      return null;
    }

    if (drinks.length === 0) {
      return (
        <h3 className="search-results">
          No results for <span>"{query}"</span>
        </h3>
      );
    }

    const page = currentPage - 1;
    const pageCount: number = Math.ceil(drinks.length / DRINKS_PER_PAGE);
    const start = page * DRINKS_PER_PAGE;
    const end = start + DRINKS_PER_PAGE;

    const handleOnNext = () =>
      setSearchParams({ q: query, page: String(Math.min(page + 1, pageCount - 1) + 1) });
    const handleOnPrevious = () =>
      setSearchParams({ q: query, page: String(Math.max(page - 1, 0) + 1) });

    return (
      <>
        <h3 className="search-results">
          Search results for <span>"{query}"</span>
        </h3>

        {drinks.slice(start, end).map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}

        {pageCount > 1 && (
          <Pagination
            currentPage={page + 1}
            pageCount={pageCount}
            next={handleOnNext}
            previous={handleOnPrevious}
          />
        )}
      </>
    );
  };

  return (
    <>
      <form className="search-form" id="search-form" onSubmit={handleSubmit}>
        <input
          id="query"
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>

      <Suspense fallback={<Loading />}>
        <Await resolve={drinks}>{(drinks) => renderSearchResults(drinks)}</Await>
      </Suspense>
    </>
  );
};
