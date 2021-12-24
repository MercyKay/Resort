import React, { Component } from 'react'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    state ={
        isOpen:false
    }
    handleToggle=()=>{
        this.state({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className='navbar'>
                <div className='navcenter'>
                    <div className='nav-header'>
           <Link to="/">
               <img src={logo} alt="Beach Resort"/>
           </Link>
           <button type='button' className='"nav-btn'>
               onClick={this.handleToggle}
               <FaAlignRight className='="nav-icon'/>
           </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links  show-nav":"nav-links"}>
                        <li>
                            <link to="/">HOME</link>
                        </li>
                        <li>
                            <link to="/rooms">ROOMS</link>
                        </li>
                    </ul>
                </div>

            </nav>
            
        );
    }
}
