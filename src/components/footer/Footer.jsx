import React from 'react'
import './footer.css'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
        <a href="#" className="footer__logo">Lorenzo Franco</a>

        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://https://www.linkedin.com/in/lorenzo-franco-49a85022a/"><BsLinkedin /></a>
          <a href="https://github.com/1Zyke"><AiFillGithub /></a>
          <a href="https://twitter.com/4Zyke"><AiFillTwitterCircle/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Lorenzo Hugo Núñez F.. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer