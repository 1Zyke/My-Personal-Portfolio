import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Design</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>I am willing to establish a design capable of enriching the users' activities, making the software more user friendly.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Universality & Timelessness</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Creativity</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>I will be able to provide a good development of the necessary web applications.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Code Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Troubleshooting</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>I will be in charge of elaborating a product of value for the public.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Good Communication Skills</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Creativity</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services