import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import "./Header.css";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/pushkarj20/" target='#' className='sociallinks'><BsLinkedin/></a>
        <a href="https://github.com/PushkarJ20" target='#' className='sociallinks'><BsGithub/></a>
        <a href="https://api.whatsapp.com/send/?phone=+91 8999765821" target='#' className='sociallinks'><BsWhatsapp/></a>

        
    </div>
  )
}

export default HeaderSocials