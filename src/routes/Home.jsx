import React, { useEffect, useState } from 'react';
import Movie from '../jsx/Movie';


function Home() {
    const [loading ,setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () =>{
      const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`);
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false)
    }
  
  
  
    useEffect(()=>{
      getMovies();
    } ,[])
  
    console.log(movies)
    return ( 
        <>
        {loading ? 
          (<div className="loading">
              <h1>loading</h1>
           </div>) :
          (

            <div className="container">
            <h1 className="containerTitle">The Movies!</h1>
              <div className="wrap">
              {movies.map((movie)=>
               <Movie   
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                genres={movie.genres}
              />
              )}
              </div>
            </div>
          )
        }
        </>
     );
}

export default Home;