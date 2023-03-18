import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../../APIKEY";
import Slider from "react-slick";
import {Link} from "react-router-dom";

const ActorMovies = ({id}) => {
    const [movies , setMovies] = useState([])
    const getActorMovies = async (id , key) =>{
        const response = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`)
        const {data} = await response
        setMovies(data.cast)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5
    };
    useEffect(() =>{
        getActorMovies(id , APIKEY)
    },[])
    return (
        <div className='container actor-movies'>
      <Slider {...settings}>
          {
              movies.filter(m => m.poster_path).map(movie =>(
                  <div>
                      <Link to={`/movies/detail-page/${movie.id}`}>
                          <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} width={150} alt=""/>
                      </Link>
                      <h4 style={{width:'150px',fontSize:'16px'}}>{movie.title}</h4>
                  </div>
              ))
          }
      </Slider>
        </div>
    );
};

export default ActorMovies;