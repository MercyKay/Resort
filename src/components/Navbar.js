import React, { Component, useState } from 'react'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

 const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false) 
        return (  
            <div>
                <p>hello everyone</p>
                <div className='navbar'>
                    <div className='nav-center'>
                        <div className='nav-header'>
                             <Link to={'/'}><img src={logo} alt="Beach Resort"/></Link>
                        </div>
                    </div>
                    <ul className={isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/rooms">ROOMS</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

export default Navbar
