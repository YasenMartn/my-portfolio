import React from 'react';
import Image from "next/image"
import { Link } from 'react-scroll';
import { ImLinkedin2, ImTwitter, ImWhatsapp, ImInstagram, ImFacebook2 } from "react-icons/im";

const Main = () => {
  return (
    <div className='mainContainer' id="home">
      <div className="left">
        <h1 className='header'>Hello, I&apos;m <span className='orangeHeader' >Yassin Laghzaouna.</span></h1>
        <h1 className='header'>I&apos;m a Front-end Web Developer.</h1>

        <div className="btnsContainer">

          <a className='btn1' href="/pictures/english.jpg" download>Download CV</a>
    
          <Link to="contact" smooth="true" className="btn2">
            Hire Me   
          </Link>
          
        </div>

        <div className="socialsContainer">
          <ImFacebook2 className='icon icon1' />
          <ImInstagram className="icon icon2" />
          <ImTwitter className='icon icon3' />
          <ImWhatsapp className="icon icon4" />
          <ImLinkedin2 className='icon icon5' />
        </div>
      </div>

      <div className="right">
        <Image src="/pictures/yk.png" layout='fill' objectFit='contain' priority />
      </div>

    </div>
  )
}

export default Main