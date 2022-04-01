import React from 'react'
import './portfolio.css'
import IMAGEN1 from '../../assets/imagen11.JPG';
import IMAGEN2 from '../../assets/imagen2.JPG';
import IMAGEN3 from '../../assets/imagen3.JPG';
import IMAGEN4 from '../../assets/hola1.JPG';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio_item-image">
           <img src={IMAGEN1} alt="" />
          </div>
          <h3>Portfolio Example</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/1Zyke/Portfolio-Example" className="btn">Github</a>
          <a href="" className="btn btn-primary"></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
           <img src={IMAGEN2} alt="" />
          </div>
          <h3>Real State Application</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/1Zyke/Real-State-" className="btn">Github</a>
          <a href="" className="btn btn-primary"></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
           <img src={IMAGEN3} alt="" />
          </div>
          <h3>Driving Management</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/1Zyke/Driving-School-System" className="btn">Github</a>
          <a href="" className="btn btn-primary"></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
           <img src={IMAGEN4} alt="" />
          </div>
          <h3>Employee Management</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/1Zyke/Employee-Management" className="btn">Github</a>
          <a href="" className="btn btn-primary"></a>
          </div>
        </article>
        
        
      </div>
    </section>
  )
}

export default Portfolio