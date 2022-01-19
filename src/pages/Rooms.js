import React from 'react'

import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';
import {data} from './../data'

const myData = data

console.log(myData);

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
