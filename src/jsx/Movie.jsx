import React from 'react';
import propTypes from "prop-types";
import { Link } from 'react-router-dom';

function Movie( {id,coverImg, title, summary,genres }) {
    return ( 
        <>
         <div className="box">
             <img src={coverImg} alt={title}/>
             <Link to={`/movie/${id}`}>
                 <h2 className="title">{title}</h2>
             </Link>
           
             <p className="summary">{summary}</p>
             <ul className="genres">
                 {genres.map(g => <li key={g}>{g}</li>)}
             </ul>
         </div>
        </>
     );
}

Movie.propTypes = {
    coverImg: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;