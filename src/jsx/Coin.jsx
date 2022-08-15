import React, { useEffect, useState } from 'react';

function Coin() {
    const [Loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([])
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) =>{
                setCoins(json);
                setLoading(false);
            });
    },[])
    return ( 
        <>
         <h1>The Coins! ({coins.length})</h1>
         {Loading ? <strong>Loading</strong> : null}
         <select>
            {coins.map((coin)=> 
                <option className='li'>
                    {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}KRW 
                </option>)}
         </select>
        </>
     );
}

export default Coin;