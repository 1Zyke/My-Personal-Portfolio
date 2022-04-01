import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/lorenzo-franco-49a85022a/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/1Zyke" target="_blank"><AiFillGithub/></a>
        <a href="https://twitter.com/4Zyke" target="_blank"><AiFillTwitterCircle/></a>
    </div>
  )
}

export default HeaderSocials