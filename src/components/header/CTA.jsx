import React from 'react'
import Resume from '../../assets/Resume.pdf'
import "./Header.css";

const CTA = () => {
  return (
    <div className='cta'>
    <a href={Resume}  className='btn' target="#">View Resume</a>
    <a href="#contact" className='btn btn-primary'>Anything to say?</a>


    </div>
  )
}

export default CTA