import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import "./Header.css";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='#' className='sociallinks'><BsLinkedin/></a>
        <a href="https://github.com" target='#' className='sociallinks'><BsGithub/></a>
        <a href="https://api.whatsapp.com/send/?phone=8999765821&text&type=phone_number&app_absent=0" target='#' className='sociallinks'><BsWhatsapp/></a>

        
    </div>
  )
}

export default HeaderSocials