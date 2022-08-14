import React, { useEffect, useState } from 'react'
import {API_Key, imageUrl} from "../../Constants/Constants";
import './Banner.css'
import '../RowPost/RowPost'
import axios from '../../Axios'
import YouTube from 'react-youtube'
import { Link } from 'react-router-dom';

function Banner(props) {
    const [Movie, setMovie] = useState() 
    const [urlId, seturlId] = useState('')
    
    useEffect(()=> {
        axios.get(`trending/all/week?api_key=${API_Key}&language=en-US`).then((Response)=>{
            setMovie(Response.data.results[0])
            console.log(Response.data.results[0])
        })
    },[])   

    return (
        <div className='banner'  style = {{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path : ""})`}}>
            
            <div className="content">
                <h1 className='title'>{Movie ? Movie.title : ""}</h1>
                <div className="banner-buttons">
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{Movie ? Movie.overview : ""}</h1>
            </div>
            
            <div className="fade"></div>

        </div>
    )
}

export default Banner