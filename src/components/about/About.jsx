import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {MdOutlineLibraryBooks} from 'react-icons/md'
import {FiDatabase} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdOutlineLibraryBooks className='about__icon'/>
              <h5>Knowlegde</h5>
              <small>React, Nodejs, .NET, Java & Python</small>
            </article>

            <article className="about__card">
              <FiDatabase className='about__icon'/>
              <h5>Skills</h5>
              <small>Web Development, Desktop Development & Data Analyst</small>
            </article>

            <article className="about__card">
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>Good Projects</small>
            </article>
          </div>

          <p>
          I am a web developer looking for new opportunities, more experience and knowledge. Being a person who adapts to any work environment, self-taught and dedicated to his work.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>




        </div>
        </div>
    </section>
  )
}

export default About