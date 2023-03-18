import React, {useState} from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({el}) => {
    return (
        <div className='popular-off'>
            <Link to={`/movies/detail-page/${el.id}`}>
                <img style={{width:'240px',height:'350px'}} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
            </Link>
            <div className='popular-card'>
                <h4 style={{width:'200px'}}>{el.title}</h4>
            </div>
        </div>
    );
};

export default MovieCard;