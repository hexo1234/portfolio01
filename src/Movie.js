import React from 'react';
import './Movie.css';
import propTypes from 'prop-types';


function Movie ({title,poster}){
    return (
        <div>
        <MoviePoster poster={poster}/>
        <h1>{title}</h1>
        </div> 
    )
}


function MoviePoster ({poster}){
    return (
        <img src={poster} alt=""/> 
    )
}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}


MoviePoster.propTypes = {
    poster: propTypes.string.isRequired
}

export default Movie;

