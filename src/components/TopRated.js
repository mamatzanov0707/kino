import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../APIKEY";
import MovieCard from "./page/movieCard";
import {LanguageContext} from "../context";

const TopRated = () => {
    const [page ,setPage] = useState(1)
    const [topRated,setTopRated] = useState([])
    const {language} = useContext(LanguageContext)
    const getTopRated = async () =>{
        const response = await axios (`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${language}&page=${page}`)
        const {data} = await response
        setTopRated(data.results)
    }
    useEffect(() =>{
        getTopRated()
    },[language,page])
console.log(topRated)

    return (
        <div id='popular'>
            <div className='container'>
                <div className='popular'>
                    {
                        topRated.map(el => <MovieCard el={el}/>)
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

export default TopRated;