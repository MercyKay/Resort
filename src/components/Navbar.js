import React, { Component, useState } from 'react'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

 const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false)
 
   
    const handleToggle= () =>{
        setIsOpen({isOpen: !isOpen})
    }
        return (  
            <div>
                <p>hello everyone</p>
                <div className='navbar'>
                    <div className='nav-center'>
                        <div className='nav-header'>
                             <Link to={'/'}><img src={logo} alt="Beach Resort"/></Link>
                             <button type='button' className='nav-btn' onClick={handleToggle}>  
                               click
                             </button>
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
            // <div>
        
            //         <h4>sammy</h4>
            //     <div className='navbar'>

            //     <div className='nav-center'>
            //         <div className='nav-header'>
            //             <Link to="/">
            //                 <img src={logo} alt="Beach Resort"/>
            //             </Link>
            //             {/* <button type='button' className='nav-btn'>  
            //                 <FaAlignRight className='="nav-icon'/>
            //             </button> */}
            //         </div>
            //         <ul className={isOpen?"nav-links  show-nav":"nav-links"}>
            //             <li>
            //                 <link to="/">HOME</link>
            //             </li>
            //             <li>
            //                 <link to="/rooms">ROOMS</link>
            //             </li>
            //         </ul>
            //     </div>

            // </div>
            // </div>
        );
    }

export default Navbar
