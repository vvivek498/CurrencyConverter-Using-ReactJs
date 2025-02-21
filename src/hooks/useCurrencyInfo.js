import { useEffect, useState } from "react";

function useCurrencyInfo(currency)
{
    const [data,setData]=useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        if (!currency) return;

        setLoading(true);
        fetch(`https://v6.exchangerate-api.com/v6/f289c736fec457c2f6b30ca1/latest/${currency}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((res) => setData(res.conversion_rates))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    },[currency]);
    
    return {data,loading,error};
}


export default useCurrencyInfo;