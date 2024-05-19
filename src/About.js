import React from 'react'
import Footer from './Footer.js'

const About = () => {
  const year = new Date();
  return (
    <footer className='About'>
      <h4>developed by Praveen {year.getFullYear()}</h4>
    </footer>

  )
}

export default About