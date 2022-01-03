import React from 'react'

import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

function Rooms() {
    return 
       <Hero  hero="roomsHero">
           <Banner title="our Rooms">
           <Link  to="/" className='btn-primary'>HOME</Link>
           </Banner>
           </Hero>
    
}

export default Rooms
