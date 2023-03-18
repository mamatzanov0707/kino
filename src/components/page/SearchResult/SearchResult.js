import React, { useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../../APIKEY";
import MovieCard from "../movieCard";

const SearchResult = () => {
    const [results , setResults] = useState([])
    const {movieName} = useParams()
    const getResult = async (key , name) =>{
        const resp = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${name}`)
        const {results} = await resp.data
        setResults(results)
    }
    console.log(results)
    useEffect(()=>{
        getResult(APIKEY, movieName)
    },[movieName])

    return (
        <div id='popular'>
            <div className="container">
                <div className='popular'>
                    {
                        results.map(el => <MovieCard el={el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchResult;