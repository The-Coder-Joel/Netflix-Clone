import React from 'react'
import {API_Key, imageUrl} from "../Constants/Constants";
import axios from '../Axios'
import {useEffect,useState} from 'react'

import './style.css'
import Footer from '../Components/Footer/Footer';
import RowPost from '../Components/RowPost/RowPost';
import { nowplaying, popularmovies, popularseries, releasing, trending, upcoming } from '../Urls';
import NavBar from '../Components/NavBar/NavBar';

function Popular() {
  const [popular, setPopular] = useState()
    
  useEffect(()=> {
    axios.get(`tv/airing_today?api_key=${API_Key}&language=en-US&page=1`).then((Response)=>{
      setPopular(Response.data.results[0])
    })
  },[])

  return (

    <div>

      <NavBar/>

      <div className='banner'  style = {{backgroundImage:`url(${popular ? imageUrl+popular.backdrop_path : ""})`}}>
        <div className="content">
          <h1 className='title'>{popular ? popular.name : ""}</h1>
          <div className="banner-buttons">
            <button className='button'>Play</button>
            <button className='button'>My List</button>
          </div>
          <h1 className='description'>{popular ? popular.overview : ""}</h1>
        </div>
        <div className="fade"></div>
      </div>

      <RowPost title='Upcoming' url={upcoming}/>
      <RowPost title='Releasing Soon' url={releasing}/>

      <RowPost title='Now Playing' url={nowplaying}/>
      <RowPost title='Trending' url={trending} isSmall/>
      <RowPost title='Popular Movies' url={popularmovies} isSmall/>
      <RowPost title='Popular TV Series' url={popularseries} isSmall/>
      <Footer/>

    </div>
  )
}

export default Popular