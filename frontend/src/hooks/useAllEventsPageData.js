import { useEffect, useState } from 'react';
import axios from 'axios';

export const useEventPageData = () => {
  const [data, setData] = useState({events: [], homepage: []});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/allevents`);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err);
        setData(null);
      } finally{
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, error, loading };
};