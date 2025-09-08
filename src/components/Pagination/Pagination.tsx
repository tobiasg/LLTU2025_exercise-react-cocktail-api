import type { ReactElement } from "react";

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  next: () => void;
  previous: () => void;
}

export const Pagination = ({
  currentPage,
  pageCount,
  next,
  previous,
}: PaginationProps): ReactElement => {
  return (
    <section className="pagination">
      <button type="button" onClick={previous} disabled={currentPage === 1}>
        Previous
      </button>
      <p>
        {currentPage} / {pageCount}
      </p>
      <button type="button" onClick={next} disabled={currentPage === pageCount}>
        Next
      </button>
    </section>
  );
};
