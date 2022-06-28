import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
      <div className="aboutContainer" id="about">
        <h1>About</h1>

        <div className="miniContainer">
          <div className="left">
            <Image 
              data-aos="fade-right" 
              data-aos-offset="350" 
              src="/pictures/about.png" 
              layout='fill' 
              objectFit='contain'
              priority
            />
          </div>

          <div className="right" data-aos="fade-left">
            <span>Hello, my name is Yassin Laghzaouna and i&apos;m a front-end web developer from Morocco.</span>
            <span>I love designing and developing websites and learning new technologies every day.</span>
          </div>
        </div>
        
      </div>
  )
}

export default About