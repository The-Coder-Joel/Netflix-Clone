import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../Axios'
import {imageUrl} from '../../Constants/Constants'
import YouTube from 'react-youtube'
import {API_Key} from '../../Constants/Constants'


function RowPost(props) {

    const [Movies, setMovies] = useState([])
    const [urlId, seturlId] = useState('')

    useEffect(() => {
      axios.get(props.url).then(Response=>{
        setMovies(Response.data.results)
      })

    }, [])

    const opts = {
            height: '390',
            width: '100%',
            
            playerVars: {
                autoplay: 1,
            },
    };
    
    const posterClick = (id)=>{
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_Key}&language=en-US`).then(Response=>{
            if(Response.data.results.length !== 0){
                seturlId(Response.data.results[0])
            }
            else{
                alert('Video Not Available...')
            }
        })
    }

  return ( 
    <div className='row'>
        <h2>{props.title}</h2>

        <div className='posters'>
            {Movies.map((movie)=>
            <>
                <img onClick={() => posterClick(movie.id)} className={props.isSmall ? 'small-poster' :'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="Poster" />
                
            </>  
            )}  
            
        </div>

        { urlId && <YouTube videoId={urlId.key} opts={opts}/> }
        
    </div>
  )
}

export default RowPost