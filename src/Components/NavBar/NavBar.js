import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

function NavBar() {

  return (
    <div className='navbar scroll'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        <ul className='elements'>
          <li><Link to={'/Home'}>Home</Link></li>
          <li><Link to={'/Series'}>TV Series </Link></li>
          <li><Link to={'/Movies'}>Movies</Link></li>
          <li><Link to={'/Popular'}>New and Popular</Link></li>
          <li><Link to={'/MyList'}>My List</Link></li>
        </ul>
        <i class="fa-solid fa-magnifying-glass search"></i>
        <Link to={'/Profile'}><img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" /></Link>
    </div>

  )
}

export default NavBar