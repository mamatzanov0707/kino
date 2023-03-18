import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../APIKEY";
import Actors from "../Actors/Actors";
import Vedeos from "../vedeos/vedeos";
import {LanguageContext} from "../../context";
import {VscBookmark, VscHeart, VscTriangleRight, VscListUnordered} from "react-icons/vsc";
import {GoStar} from 'react-icons/go'

const DetailPage = () => {
    const [detail, setDetail] = useState({})
    const {movieId} = useParams()
    const {language} = useContext(LanguageContext)
    const getDetail = async () => {
        const res = await axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}&language=${language}`)
        const {data} = await res
        setDetail(data)
    }
    useEffect(() => {
        getDetail()
    }, [language])
    console.log(detail)
    return (
        <>
            <div id='detail' style={{
                background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.poster_path}")no-repeat center/cover`
            }}>
                <div className='container'>
                    <div className="detail">
                        <img className='detail--hov'
                             src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${detail.poster_path}`} alt=""/>
                        <div className='detail--desc'>
                            <h1>{detail.title}</h1>
                            <div className='detail--spaces'>
                                <div className='detail--off'>
                                    <p>{Math.floor(detail.vote_average * 10)}%</p>
                                </div>
                                <div className='detail--too'>
                                    <VscListUnordered className='detail--icons'/>
                                    <VscHeart className='detail--icons'/>
                                    <VscBookmark className='detail--icons'/>
                                    <GoStar className='detail--icons'/>
                                    <VscTriangleRight className='detail--icons'/>
                                </div>
                            </div>
                            <p>{detail.overview}</p>
                            <p>{detail.release_date}</p>
                            <h3>{Math.floor(detail.runtime / 60)} h {detail.runtime % 60} min</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Actors movieId={movieId}/>
            <Vedeos movieId={movieId}/>
        </>
    );
};

export default DetailPage;

// VscListUnordered
// VscBookmark
//VscHeart
// GoStar
// VscTriangleRight