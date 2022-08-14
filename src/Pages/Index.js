import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import './Index.css'

function Index() {
  return (
    <div>
        <div className='mainpage'>
            <div className="faded">
                <img className='logo1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
                <Link to={'/Signin'}><button className='sign'>Sign In</button></Link>

                <div className="centerpage">

                    <h1 className='head1'>Unlimited movies, TV shows and more.</h1>
                    <h1 className='head2'> Watch anywhere. Cancel anytime.</h1>

                    <h3 className='head3'> Ready to watch?  Create or restart your membership.</h3>

                </div>

            </div>  
        </div>

        <Footer/>

    </div>

  )
}

export default Index