import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaKaggle} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      <h1 className='contact_h1'>Contact</h1>
      <div className='container contact_container'>
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail/>
            <h4>Email</h4>
            <h5>jpushkar200199@gmail.com</h5>
            <a href="mailto:jpushkar200199@gmail.com" >Contact me through e-mail</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send/?phone=918999765821&text&type=phone_number&app_absent=0">Message Me</a>
          </article>
          
          <article className='contact__option'>
            <BsLinkedin/>
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/pushkarj20/ " target='#'>Let's connect on Linkedin</a>
          </article>

          <article className='contact__option'>
            <BsGithub/>
            <h4>GitHub</h4>
            <a href="https://github.com/PushkarJ20 " target='#'>GitHub Profile</a>
          </article>

          <article className='contact__option'>
            <FaKaggle/>
            <h4>Kaggle</h4>
            <a href="https://www.kaggle.com/pushkarj20 " target='#'>Kaggle Profile</a>
          </article>
        </div>
        <form action=""></form>

      </div>
    </section>
  )
}

export default Contact