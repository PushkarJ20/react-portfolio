import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiProgression} from 'react-icons/gi'


import {BiMessageSquareDetail} from 'react-icons/bi'
import {VscTools} from 'react-icons/vsc'
import { useState } from 'react'


const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');
  const changeNavbarColor = () => {
    if (window.scrollY <=1000) {
        setActiveNav('#');
    }
    else if(window.scrollY >1000 && window.scrollY<=2000) {
      setActiveNav('#about');
    }
    else if(window.scrollY >2000 && window.scrollY<=3000) {
      setActiveNav('#skills');
    }
    else if(window.scrollY >3000 && window.scrollY<=4000) {
      setActiveNav('#portfolio');
    }
    else if(window.scrollY >4000 && window.scrollY<=5000) {
      setActiveNav('#contact');
    }
};
  window.addEventListener("scroll",changeNavbarColor)
  return (
    <nav className='navhead'>
      <a href="#" onClick={()=>setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome/> </a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><VscTools/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GiProgression/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><BiMessageSquareDetail /></a>
      
    </nav>
  )
}

export default Nav