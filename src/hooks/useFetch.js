import { useState } from 'react';

function useFetch(url, initialValue = null) {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const results = await (await fetch(url)).json();
      setData(results);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return [data, error, loading, fetchData];
}

export default useFetch;
