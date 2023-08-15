import React from "react";
import "./About.css";
import batman from "../../assets/batman.png";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import HeaderSocials from "../header/HeaderSocials";

const About = () => {
  return (
    <section id="about">
      <h1 className="about_h1">About Me</h1>
      

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={batman} alt="" />
          </div>
        </div>
        <div className="about__content">
          <p className="about__me-intro">
            Hello there, I'm Pushkar Joshi, currently pursuing my MCA at NIT
            Kurukshetra. I am very much interested in the fields like Data Science, Machine
            Learning, and Software Development. Most of you won't believe, but I
            got interest in this field because of academic curriculum. Yes,
            you read it right, haha. Apart from my love for data, I love to play
            Badminton and watching movies. Aspiration is to work in the field of
            Data Science where I will have to deal with different Machine
            Learning algorithms as well as will have to Analyze and play with
            Data. Thank you for stopping by. Let's connect, collaborate, and
            embark on this data-driven journey together!
          </p>
          

          <div className="about__cards">
            <a href="#skills" className="btn btn-primary">
              Skills
            </a>
            <a href="#portfolio" className="btn btn-primary">
              Projects
            </a>
            <a href="#contact" className="btn btn-primary">
              Contact
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
