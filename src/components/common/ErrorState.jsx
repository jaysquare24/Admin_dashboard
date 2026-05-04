export const ErrorState = ({ message, onRetry }) => {
  return (
    <div className="error-state">
      <p>{message || "Something went wrong."}</p>
      <button onClick={onRetry}>Try Again</button>
    </div>
  );
};