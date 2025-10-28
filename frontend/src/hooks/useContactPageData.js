import { useEffect, useState } from 'react';
import axios from 'axios';

export const useContactPageData = () => {
  const [data, setData] = useState({contacts: [], homepage: []});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/contacts`);
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