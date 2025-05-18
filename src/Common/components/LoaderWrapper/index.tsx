// import React, { useState, useEffect, useCallback } from "react";
// import Loader from "../Loader";

// interface LoaderWrapperProps {
//   onFetch: () => Promise<void>;
//   retries?: number;
//   retryDelay?: number;
//   children: React.ReactNode;
//   loadingComponent?: React.ReactElement | null;
//   errorComponent?: (props: {
//     error: Error;
//     retry: () => void;
//   }) => React.ReactElement | null;
// }

// const LoaderWrapper: React.FC<LoaderWrapperProps> = ({
//   onFetch,
//   retries = 3,
//   retryDelay = 1000,
//   children,
//   loadingComponent = <Loader />,
//   errorComponent = DefaultErrorComponent,
// }) => {
//   const [status, setStatus] = useState<
//     "idle" | "loading" | "success" | "error"
//   >("idle");
//   const [error, setError] = useState<Error | null>(null);
//   const [retryCount, setRetryCount] = useState(0);

//   const fetchData = useCallback(async () => {
//     setStatus("loading");
//     try {
//       await onFetch();
//       setStatus("success");
//       setError(null);
//     } catch (err) {
//       if (retryCount < retries) {
//         setTimeout(() => {
//           setRetryCount((prev) => prev + 1);
//         }, retryDelay);
//       } else {
//         setStatus("error");
//         setError(err as Error);
//       }
//     }
//   }, [onFetch, retryCount, retries, retryDelay]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   const handleRetry = () => {
//     setRetryCount(0);
//     fetchData();
//   };

//   if (status === "loading") {
//     return loadingComponent;
//   }

//   if (status === "error" && error) {
//     return errorComponent({ error, retry: handleRetry });
//   }

//   return <>{children}</>;
// };

// const DefaultErrorComponent: React.FC<{ error: Error; retry: () => void }> = ({
//   error,
//   retry,
// }) => (
//   <div>
//     <h3>Error: {error.message}</h3>
//     <button onClick={retry}>Retry</button>
//   </div>
// );

// export default LoaderWrapper;

import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Loader from "../Loader";
import { APIStatus } from "../../../NxtWatch/constants/APIStatus";

interface LoaderWrapperProps {
  onFetch: () => Promise<void>;
  status: APIStatus;
  error?: string | null;
  children: React.ReactNode;
  loadingComponent?: React.ReactElement | null;
  errorComponent?: (props: {
    error: string;
    retry: () => void;
  }) => React.ReactElement | null;
}

const LoaderWrapper: React.FC<LoaderWrapperProps> = observer(
  ({
    onFetch,
    status,
    error,
    children,
    loadingComponent = <Loader />,
    errorComponent = DefaultErrorComponent,
  }) => {
    useEffect(() => {
      if (status === APIStatus.initial) {
        onFetch();
      }
    }, [status, onFetch]);

    const handleRetry = () => {
      onFetch();
    };

    if (status === APIStatus.inProgress) {
      return loadingComponent;
    }

    if (status === APIStatus.failure && error) {
      return errorComponent({ error, retry: handleRetry });
    }

    return <>{children}</>;
  }
);

const DefaultErrorComponent: React.FC<{
  error: string;
  retry: () => void;
}> = ({ error, retry }) => (
  <div>
    <h3>Error: {error}</h3>
    <button onClick={retry}>Retry</button>
  </div>
);

export default LoaderWrapper;
