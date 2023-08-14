import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillBookFill} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {VscTools} from 'react-icons/vsc'

const Nav = () => {
  return (
    <nav className='navhead'>
      <a href="#" className='active' ><AiOutlineHome height={100} width={100}/> </a>
      <a href="#about" ><AiOutlineUser/></a>
      <a href="#education" ><BsFillBookFill/></a>
      <a href="#skills"><VscTools/></a>
      <a href="#contact" ><BiMessageSquareDetail /></a>
      
    </nav>
  )
}

export default Nav