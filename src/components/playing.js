import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../APIKEY";
import MovieCard from "./page/movieCard";
import {LanguageContext} from "../context";

const Playing = () => {
    const [playing,setPlaying] = useState([])
    const [page ,setPage] = useState(1)
    const {language} = useContext(LanguageContext)
    const getPlaying = async () =>{
        const url = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=${language}&page=${page}`)
        const {data} = await url
        setPlaying(data.results)
    }
    useEffect(()=>{
        getPlaying()
    },[language,page])
    // console.log(playing)
    return (
        <div id='popular'>
            <div className="container">
                <div className="popular">
                    {
                        playing.map(el => <MovieCard el={el}/>)
                    }
                </div>
                <div className='popular--btn'>
                    <button onClick={() => setPage(page === 1 ? page : page -1)}>Prev</button>
                    <button onClick={() => setPage(page +1)}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Playing;