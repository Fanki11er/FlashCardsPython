import { useState } from "react";
import { Status } from "../Types/types";

const useLoader = () => {
  const [status, setStatus] = useState<Status>("");
  const [error, setError] = useState("");
  const startLoading = () => {
    setError("");
    setStatus("Loading");
  };
  const handleError = (error: string) => {
    setError(error);
    setStatus("Error");
  };

  const finishedLoading = () => {
    setStatus("Ready");
    setError("");
  };

  const resetError = () => {
    setError("");
    setStatus("");
  };

  return {
    status,
    error,
    startLoading,
    handleError,
    finishedLoading,
    resetError,
  };
};

export default useLoader;
