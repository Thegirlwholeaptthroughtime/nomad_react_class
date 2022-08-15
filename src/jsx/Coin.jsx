import React, { useState } from 'react';

function Coin() {
    const [Loading, setLoading] = useState(true);
    return ( 
        <>
         <h1>The Coins!</h1>
         {Loading ? <strong>Loading</strong> : ""}
        </>
     );
}

export default Coin;