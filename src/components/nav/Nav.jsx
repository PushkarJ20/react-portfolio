import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillBookFill} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {VscTools} from 'react-icons/vsc'
import { useState } from 'react'


const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');
  
  return (
    <nav className='navhead'>
      <a href="#" onClick={()=>setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome/> </a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><VscTools/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><BiMessageSquareDetail /></a>
      
    </nav>
  )
}

export default Nav