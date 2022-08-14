import React from 'react'
import './Index.css'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom'

function Signup() {

  return (
    <div>
        <div className='mainpage'>
            <div className="faded">
              <img className='logo1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            </div>
            <div className="details">
              <h1 className='head'>Sign Up</h1>

              <form  method="post">
                <input className='inputfield2' type="text" name="Username"  id="" placeholder='User Name' />
                <input className='inputfield2' type="email" name="Email"  id="" placeholder='Email' />
                <input className='inputfield2' type="password" name="Password"  id="" placeholder='Password' />
            
                <Link to={'/Home'}><button type='submit' className='signin'>Sign Up</button></Link>
              </form>
              
            </div>  
        </div>

        <Footer/>
    </div>
  )
}

export default Signup