import React from 'react';
import Image from 'next/image';
import { ImLinkedin2, ImTwitter, ImWhatsapp, ImInstagram, ImFacebook2 } from "react-icons/im";

const Main = () => {
  return (
    <div className='mainContainer'>

      <div className="left">
        <h1 className='header'>Hey, I&apos;m <span className='orangeHeader' >Yassin Laghzaouna</span></h1>
        <h1 className='header'>I&apos;m a Front-end Web Developer</h1>
        <span className='text'>Welcome to my official portfolio website where i put all my projects, technologies i&apos;m using and more.</span>
        <button className='btn1'>Download CV</button>
        <button className='btn2'>Hire Me</button>
        <div className="socialsContainer">
          <ImFacebook2 className='icon icon1'/>
          <ImInstagram className="icon icon2"/>
          <ImTwitter className='icon icon3'/>
          <ImWhatsapp className="icon icon4" />
          <ImLinkedin2 className='icon icon5'/>
        </div>
      </div>

      <div className="right">
        <div className="BgContainer">
          <div className="ImageContainer"></div>
        </div>
      </div>

    </div>
  )
}

export default Main