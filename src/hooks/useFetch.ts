import { useState, useEffect} from "react";
import { useAuth0 } from '@auth0/auth0-react';

const useFetch = (url: string) => {
  const { getAccessTokenSilently, getIdTokenClaims } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [data, setData] = useState([])

  useEffect(()=>{
    console.log('url', url)
    fetchData(url)
  }, [])

  const fetchData = async (url:string) => {
    try{
      const accessToken = await getAccessTokenSilently();
      const idTokenClaims = await getIdTokenClaims();
      let idToken 
      if (idTokenClaims) {
        idToken = idTokenClaims.__raw;
      }
      await setLoading(true);
      await setError(false);
      const res = await fetch(url, {
        headers:{
          "Content-Type": "application/json",
          "Authorization": `${idToken}`,
        },
      });
      console.log('fetch response', res)
      const data = await res.json();
      await setData(data)
      setLoading(false);
    } catch (err){
      setError(true);
    }
  }
  return {loading, error, data}
}

export default useFetch