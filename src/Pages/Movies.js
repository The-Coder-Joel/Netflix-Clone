import React, { useEffect, useState } from 'react'
import {API_Key, imageUrl} from "../Constants/Constants";
import axios from '../Axios'

import './style.css'
import RowPost from '../Components/RowPost/RowPost';
import {actionmovies,comedymovies,topratedmovies,popularmovies,romanticmovies, animationmovies} from '../Urls'
import {horrormovies, familymovies, fantacymovies, crimemovies, scifimovies, dramamovies, adventuremovies} from '../Urls'
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';


function Movies() {
  const [MoviesOnly, setMoviesOnly] = useState()
    
  useEffect(()=> {
    axios.get(`trending/movie/week?api_key=${API_Key}&language=en-US`).then((Response)=>{
      setMoviesOnly(Response.data.results[1])
    })
  },[])

  return (

    <div>

      <NavBar/>

      <div className='banner'  style = {{backgroundImage:`url(${MoviesOnly ? imageUrl+MoviesOnly.backdrop_path : ""})`}}>
        <div className="content">
          <h1 className='title'>{MoviesOnly ? MoviesOnly.title : ""}</h1>
          <div className="banner-buttons">
            <button className='button'>Play</button>
            <button className='button'>My List</button>
          </div>
          <h1 className='description'>{MoviesOnly ? MoviesOnly.overview : ""}</h1>
        </div>
        <div className="fade"></div>
      </div>
  
      <RowPost title='Top Rated'  url={topratedmovies}/>
      <RowPost title='Popular' url={popularmovies}/>

      <RowPost title='Action' url={actionmovies} isSmall/>
      <RowPost title='Comedy' url={comedymovies} isSmall/>
      <RowPost title='Romance' url={romanticmovies} isSmall/>
      <RowPost title='Animation' url={animationmovies} isSmall/>
      <RowPost title='Horror' url={horrormovies} isSmall/>
      <RowPost title='Family' url={familymovies} isSmall/>
      <RowPost title='Crime' url={crimemovies} isSmall/>
      <RowPost title='Sci - Fi' url={scifimovies} isSmall/>
      <RowPost title='Drama' url={dramamovies} isSmall/>
      <RowPost title='Fantacy' url={fantacymovies} isSmall/>
      <RowPost title='Adventure' url={adventuremovies} isSmall/>
      
      
      <Footer/>

    </div>


    )
}

export default Movies