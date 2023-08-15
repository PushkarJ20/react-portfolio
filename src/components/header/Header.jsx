import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { useState } from 'react'

import batman from "../../assets/batman.png";

const Header = () => {
  const [activeNav,setActiveNav]=useState('#');
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Pushkar</h1>
        <h5 className="text-light">
          Interested in Data Science, Machine Learning, Software Development
        </h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={batman} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
