import React from 'react'
import Banner from "../Components/Banner/Banner";
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import RowPost from '../Components/RowPost/RowPost';
import {originals,trending, nowplaying, popular, upcoming} from '../Urls.js'

function Home() {
  return (
    <div>

        <NavBar/>

        <Banner/>
      
        <RowPost title='Netflix Originals' url={originals}/>
        <RowPost title='Upcoming' url={upcoming}/>
        <RowPost title='Trending' url={trending}/>
        <RowPost title='Now Playing' url={nowplaying}/>
        <RowPost title='Popular' url={popular}/>
        

        <Footer/>
    </div>
  )
}

export default Home