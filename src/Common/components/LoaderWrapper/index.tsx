import React, { useState, useEffect, useCallback } from "react";
import Loader from "../Loader";

interface LoaderWrapperProps {
  onFetch: () => Promise<void>;
  retries?: number;
  retryDelay?: number;
  children: React.ReactNode;
  loadingComponent?: React.ReactElement | null;
  errorComponent?: (props: {
    error: Error;
    retry: () => void;
  }) => React.ReactElement | null;
}

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({
  onFetch,
  retries = 3,
  retryDelay = 1000,
  children,
  loadingComponent = (
    <div>
      <Loader />
    </div>
  ),
  errorComponent = DefaultErrorComponent,
}) => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<Error | null>(null);
  const [retriesLeft, setRetriesLeft] = useState(retries);

  const fetchData = useCallback(async () => {
    setStatus("loading");
    try {
      await onFetch();
      setStatus("success");
      setError(null);
    } catch (err) {
      if (retriesLeft > 0) {
        setTimeout(() => {
          setRetriesLeft((prev) => prev - 1);
          fetchData();
        }, retryDelay);
      } else {
        setStatus("error");
        setError(err as Error);
      }
    }
  }, [onFetch, retriesLeft, retryDelay]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleRetry = () => {
    setRetriesLeft(retries);
    fetchData();
  };

  if (status === "loading") {
    return loadingComponent;
  }
  if (status === "error" && error)
    return errorComponent({ error, retry: handleRetry });
  return <>{children}</>;
};

const DefaultErrorComponent: React.FC<{ error: Error; retry: () => void }> = ({
  error,
  retry,
}) => (
  <div>
    <h3>Error: {error.message}</h3>
    <button onClick={retry}>Retry</button>
  </div>
);

export default LoaderWrapper;
