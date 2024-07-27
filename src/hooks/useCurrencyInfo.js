import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data,setData]=useState({})
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.7.27/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res)=>setData(res[currency]));
      console.log(data)
  }, [currency]);
//   return data or setData  
console.log(data)
return data
}


export default useCurrencyInfo
