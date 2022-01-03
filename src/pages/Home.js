import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
function Home() {
    return (
       <div>
            <Hero>
                <Banner title="LUXURIOUS ROOMS" subtitle="Deluxe Rooms starting at $29">
                    <Link to="/rooms" className='btn-primary'>ROOMS</Link>
                </Banner>
            </Hero>
            <Services/>
        </div>
    )
}

export default Home
