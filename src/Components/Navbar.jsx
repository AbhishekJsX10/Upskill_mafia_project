import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <header>
        <div className="nav-container">
            <div className="logo">LOGO</div>
            <nav>
                <a className="login" to="">Login</a>
                <a className="button" to="">Signup</a>
            </nav>
        </div>
    </header>
  )
}

export default Navbar