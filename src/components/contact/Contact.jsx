import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {MdSettingsCell} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_06ulhas', 'template_yka91dm', form.current, "_95KgUi1WaeTrxngE");
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>loronf19@gmail.com</h5>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Lorenzo Franco</h5>
            <a href="https://www.linkedin.com/in/lorenzo-franco-49a85022a/">Send a message</a>
          </article>
          <article className="contact__option">
            <MdSettingsCell className="contact__option-icon"/>
            <h4>Cell:</h4>
            <h5>+18297421419</h5>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact