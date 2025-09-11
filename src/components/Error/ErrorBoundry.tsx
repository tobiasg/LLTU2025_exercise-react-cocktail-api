import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router";

export const ErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="error">
        <h1>Error</h1>
        <p>An unexpected error occurred.</p>
        <p>
          {error.status} {error.statusText}
        </p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Go Back
        </a>
      </div>
    );
  }

  if (error instanceof Error) {
    return (
      <div className="error">
        <p>{error.message}</p>
      </div>
    );
  }

  return <div>An unknown error occurred.</div>;
};
