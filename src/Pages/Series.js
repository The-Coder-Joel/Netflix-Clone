import React from 'react'
import axios from '../Axios'
import {useEffect,useState} from 'react'

import './style.css'
import {imageUrl,API_Key} from '../Constants/Constants'
import Footer from '../Components/Footer/Footer'
import RowPost from '../Components/RowPost/RowPost'
import {actionseries, animationseries, comedyseries, crimeseries, dramaseries, familyseries, kidsseries} from '../Urls'
import {mysteryseries, originals, popularseries, scifiseries, topratedseries} from '../Urls'
import NavBar from '../Components/NavBar/NavBar'


function Series() {
  const [Series, setSeries] = useState()
    
  useEffect(()=> {
    axios.get(`trending/tv/week?api_key=${API_Key}&language=en-US`).then((Response)=>{
      setSeries(Response.data.results[0])
      console.log(Response.data.results[0])
    })
  },[])

  return (

    <div>

      <NavBar/>

      <div className='banner'  style = {{backgroundImage:`url(${Series ? imageUrl+Series.backdrop_path : ""})`}}>
        <div className="content">
          <h1 className='title'>{Series ? Series.name : ""}</h1>
          <div className="banner-buttons">
            <button className='button'>Play</button>
            <button className='button'>My List</button>
          </div>
          <h1 className='description'>{Series ? Series.overview : ""}</h1>
        </div>
        <div className="fade"></div>
      </div>
  
      <RowPost title='Netflix Originals' url={originals}/>
      <RowPost title='Top Rated' url={topratedseries}/>
      <RowPost title='Popular' url={popularseries}/>

      <RowPost title='Action & Adventure' url={actionseries} isSmall/>
      <RowPost title='Comedy' url={comedyseries} isSmall/>
      <RowPost title='Animation' url={animationseries} isSmall/>
      <RowPost title='Sci-Fi & Fantasy' url={scifiseries} isSmall/>
      <RowPost title='Drama' url={dramaseries} isSmall/>
      <RowPost title='Family' url={familyseries} isSmall/>
      <RowPost title='Crime' url={crimeseries} isSmall/>
      <RowPost title='Kids' url={kidsseries} isSmall/>
      <RowPost title='Mystery' url={mysteryseries} isSmall/>
      
      

      <Footer/>

    </div>


    )
}

export default Series