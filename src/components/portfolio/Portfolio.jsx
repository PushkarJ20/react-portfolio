import React from 'react'
import './Portfolio.css'
import amazon_img from '../../assets/amazon_img.png'
import portfolio_img from '../../assets/portfolio_img.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h1 className='portfolio_h1'>Portfolio</h1>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={amazon_img} alt="" />
          </div>
          <h3>Amazon Clone</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/PushkarJ20/Amazon-Clone/tree/main/amazon-clone" className='btn' target='#'>Github Repo</a>
            <a href="https://clone-bec91.web.app/" className='btn btn-primary' target='#'>Live Demo</a>
          </div>
          
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={portfolio_img} alt="" />
          </div>
          <h3>Portfolio Website</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/PushkarJ20/react-portfolio" className='btn' target='#'>Github Repo</a>
            <a href="https://clone-bec91.web.app/" className='btn btn-primary' target='#'>Live Demo</a>
          </div>
                  </article>


      </div>
    </section>
  )
}

export default Portfolio