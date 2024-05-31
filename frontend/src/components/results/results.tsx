import type { Inputs } from "../../shared/types";

interface IResultsProps {
  results: Inputs[];
  loading: boolean;
}

export const Results = ({ results, loading }: IResultsProps) => {
  if (loading) return <h3 style={{ alignSelf: "center" }}>Loading...</h3>;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Results:</h2>
      {results.length === 0 ? (
        <h3 style={{ alignSelf: "center" }}>No matches :(</h3>
      ) : (
        <div className="results-wrapper">
          {results.map(({ email, number }, idx) => (
            <div key={idx} className="result">
              <p>Email: {email}</p>
              <p>Phone number: {number}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
