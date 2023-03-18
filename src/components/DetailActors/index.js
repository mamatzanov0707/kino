import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../APIKEY";
import ActorMovies from "./ActorMovie";
import {LanguageContext} from "../../context";


const DetailActors = () => {
    const [detailCart, setDetailCart] = useState({})
    const [viewMore , setViewMore] = useState(250)
    const {castId} = useParams()
    const getDetailActors = async (id, key) => {
        const resp = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`)
        const {data} = await resp
        setDetailCart(data)
    }
    const play = (text) =>{
        if (viewMore ===250){
            setViewMore(text.length)
        }else setViewMore(250)
    }
    const {birthday,biography, name, profile_path, place_of_birth} = detailCart
    useEffect(() => {
        getDetailActors(castId, APIKEY)
    }, [])
    // console.log(detailCart)
    return (
        <div id='detail-actors'>
            <div className='container'>
                <div className='detail-actors'>
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`} alt=""/>
                    <div className='detail-actors--desc'>
                        <h1>{name}</h1>
                        <h3>{birthday} ( 57 лет )</h3>
                        <h4>Биолграфия</h4>
                        <p>{biography && biography.slice(0,viewMore)}</p>
                        { biography && biography.length > 250 && <span
                            onClick={() => play(biography)}
                            style={{color: 'blue', cursor: 'pointer'}}
                        >{viewMore === 250 ? 'читать дальше ✅' : 'закрыть ❌'}</span>}
                    </div>
                </div>
            </div>
            <ActorMovies id={castId}/>
        </div>
    );
};

export default DetailActors;
