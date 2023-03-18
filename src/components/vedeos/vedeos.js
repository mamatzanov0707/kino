import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../APIKEY";
import Slider from "react-slick";

const Vedeos = ({movieId}) => {
    const [vedeos , setVedeos] = useState([])
    const getVedeos = async (id,key) =>{
        const res = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
        const {data} = res
        setVedeos(data.results)
    }
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    useEffect(()=>{
        getVedeos(movieId,APIKEY)
    },[])
    console.log(vedeos)

    return (
    <div id='vedeos'>
        <div className='container' style={{color:'black'}}>
             <Slider {...settings}>
                 {
                     vedeos.slice(0,10).map(el =>(
                         <div>
                             <iframe width="340" height="220" src={`https://www.youtube.com/embed/${el.key}`}
                                     title="YouTube video player" frameBorder="0"
                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                     allowFullScreen></iframe>
                         </div>
                     ))
                 }
             </Slider>
        </div>
    </div>
    );
};

export default Vedeos;