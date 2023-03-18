import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../APIKEY";
import cook from "../../img/cook.jpg"
import Slider from "react-slick";
import {Link} from "react-router-dom";

const Actors = ({movieId}) => {
    const [actors, setActors] = useState([])
    const getCredits = async (id, apikey) => {
        const res = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}&language=en-US`)
        const {data} = res
        setActors(data.cast)
    }
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500
    };
    useEffect(() => {
        getCredits(movieId, APIKEY)
    })
    return (
        <div id='actors'>
            <div className='container'>
                <Slider {...settings}>
                    {
                        actors.map(el => (
                            <div key={el.id}>
                              <Link to={`/movies/actors-cast/${el.id}`}>
                                  {
                                      el.profile_path ? <img width={200} src={`https://www.themoviedb.org/t/p/w276_and_h350_face${el.profile_path}`} alt=""/> :
                                          <img className='actors--off' src={cook} width={200} height={253} alt=""/>
                                  }
                              </Link>
                                <h4 style={{color: 'white', fontSize: '18px'}}>{el.name}</h4>
                                <p style={{color:'white',fontSize:'14px',width:'200px'}}>{el.character}</p>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Actors;

