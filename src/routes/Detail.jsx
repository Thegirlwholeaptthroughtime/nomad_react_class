import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
    const [loading ,setLoading] = useState(true);
    const {id} = useParams();
    const getMovie = async () =>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
        ).json();
        setLoading(false)
    };
  
    useEffect(()=>{
        getMovie();
    },[])
    return ( 
        <>
            {loading ? (<h1 className='loading'></h1>):(null)}
        </>
     );
}

export default Detail;
