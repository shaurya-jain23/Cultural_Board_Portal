import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAllInitiativesPageData = ()=>{
    const [data,setData] = useState({initiatives:[],homepage: []});
    const [error, setError] = useState(null);
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                setLoading(true);
                const response =await axios.get(`${process.env.REACT_APP_API_BASE_URL}/allinitiatives`);
                const initiatives = response.data?.data || [];
                setData({initiatives: initiatives});
                setError(null);
            }
            catch(e){
                console.log("Error fetching initiatives:", e);
                setError(e);
                setData({initiatives: []});
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
    },[]);
    return {data, error, loading}
}

