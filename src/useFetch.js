import { useState, useEffect } from "react";

const useFetch = (url)=>{
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        setTimeout(() => {
            
            fetch(url)
            .then(res=>{
                if(!res.ok){
                    throw Error("Can not read response object.");
                }
                return res.json();
            })
            .then(data=>{
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err=>{
                setIsPending(false);
                setError(err.message);
                console.log(err.message);
            });
        }, 2000);
        },[url]);
        
    return {data,isPending,error}
}


export default useFetch;