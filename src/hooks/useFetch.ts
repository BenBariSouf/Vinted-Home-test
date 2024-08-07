
import { useCallback, useEffect, useState } from 'react';
import { catchErrors, constructURL } from '../utils';
import { Photo } from "../types";
interface FetchState {
  data: Photo[];
  error: boolean;
  loading: boolean;
}

const useFetch = (page: number) => {
  const [fetchState, setFetchState] = useState<FetchState>({
    data: [],
    error: false,
    loading: false,
  });

  // fetch data and memoize it to avoid unnecessary re-renders
  const fetchData = useCallback(async () => {
    setFetchState((prev) => ({ ...prev, loading: true, error: false }));

    try {
      const response = await fetch(constructURL(page, null));
      const json = await response.json();
      setFetchState((prev) => ({
        ...prev,
        data: [...prev.data, ...json.photos.photo],
        loading: false,
      }));
    } catch (error) {
      setFetchState((prev) => ({ ...prev, error: true, loading: false }));
    }
  }, [page]);

  //trigger data fetching when page changes
  useEffect(() => {
    if (page > 0) {
      catchErrors(fetchData());
    }
  }, [fetchData, page]);

  return fetchState;
};

export default useFetch;
