import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';

const Rooms = () => {
    return( 
    <div>
       <Hero  hero="roomsHero">
           <Banner title="our Rooms">
              <Link  to="/" className='btn-primary'>HOME</Link>
           </Banner>
       </Hero>
    </div>)
    
}

export default Rooms
