import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className='hero'>
        <div className="banner">
            <h1>Volunteer</h1>
            <h3>Need</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas pariatur 
                ut quae explicabo dicta magnam, fugit, officiis optio quis debitis at incidunt
                 error ad ex quasi suscipit cupiditate eos consectetur?
            </p>
        </div>
        
        <div className="banner">
            <img src="image.png" alt="hero"/>
        </div>
        {/* <Link to = {'/donate'} className='btn'>Donate Now</Link> */}
    </section>
  )
}

export default Hero
