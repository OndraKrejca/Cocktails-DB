import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav__cont'>
      <ul>
        <li>
          <Link to='/' className='nav__link'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='nav__link'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
