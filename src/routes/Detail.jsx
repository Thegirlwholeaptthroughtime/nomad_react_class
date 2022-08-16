import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../jsx/Movie';

function Detail() {
    const [loading ,setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState([]);
    const {id} = useParams();
    const getMovieDetail  = 
      async () =>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieDetail(()=>json.data.movie)
        setLoading(false)
        console.log(json.data.movie);
        } 
      
  
    useEffect(()=>{
      getMovieDetail();
    },[])
    return ( 
      <>
      {loading ? 
        (<div className="loading">
            <h1>loading</h1>
         </div>) :
        (
      
          <div className='container'>
          <img src={movieDetail.medium_cover_image} alt="" />
            <h1>{movieDetail.title}</h1>
            <h1>{movieDetail.description_full}</h1>
          </div>
       
        )
      }
      </>
     );
}

export default Detail;
