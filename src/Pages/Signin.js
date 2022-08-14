import React from 'react'
import './Index.css'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div>
        <div className='mainpage'>
            <div className="faded">
              <img className='logo1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            </div>
            <div className="details">
              <h1 className='head'>Sign In</h1>

              <form action="" method="post">
                <input className='inputfield' type="text" name="" id="" placeholder='Email' />
                <input className='inputfield' type="password" name="" id="" placeholder='Password' />
                <Link to={'/Home'}><button className='signin'>Sign In</button></Link>
              </form>

              <h4 className='signup'>New to Netflix? <Link to={'/Signup'} className='link'>Sign up now.</Link> </h4>
              
            </div>  
        </div>

        <Footer/>

    </div>
  )
}

export default Signin