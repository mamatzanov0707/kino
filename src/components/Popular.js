import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../APIKEY";
import MovieCard from "./page/movieCard";
import {LanguageContext} from "../context";


const Popular = () => {
    const [popular,setPopular] = useState([])
    const [page ,setPage] = useState(1)
    const getPopular = async () =>{
        const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=ru-RU&page=${page}`)
        const {data} = await res
        setPopular(data.results)
    }
    console.log(popular)
    useEffect(() =>{
        getPopular()
    },[page])

    return (
        <div id='popular'>
            <div className='container'>
                <div style={{flexWrap:'wrap'}} className='popular'>
                    {
                        popular.map(el =>(<MovieCard key={el.id} el={el}/>))
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

export default Popular;

// <div key={el.id} className='popular-off'>
//     <img style={{width:'240px',height:'350px'}} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
//     <div className='popular-card'>
//         <h4>{el.title}</h4>
//     </div>
// </div>