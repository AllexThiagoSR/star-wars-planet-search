import { useState } from 'react';

function useFetch(url, initialValue) {
  const [data, setData] = useState(initialValue);
  const [error] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const results = await (await fetch(url)).json();
    setData(results);
    setLoading(false);
  };

  return [data, error, loading, fetchData];
}

export default useFetch;
