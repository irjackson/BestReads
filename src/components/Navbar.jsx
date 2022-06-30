import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux'
import img from '../images/BestReads.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav id='navbar'>
            <div id='el'>
                <img src={img}/>              
                  <Link to='/app'>
                    <button class='links'>Home</button>
                  </Link>
                  <Link to='/explore'>
                    <button class='links'>Explore</button>
                  </Link>
                  <Link to='/about'>
                    <button class='links'>About</button>
                  </Link>
                  <Link to='/'>
                    <button class='links' id="logout">Logout</button>
                  </Link>
            </div>
        </nav>
    )
}

export default Navbar;