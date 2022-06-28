import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from "react-scroll";

const Navbar = () => {

  const [menu, setMenu] = useState(false);

  return (
    <div className='navbar'>

      <Link to="home" smooth={true} offset={-70}>
        <div className="logoContainer" onClick={() => setMenu(false)}>
          <Image src="/pictures/k.png" alt="logo" width="50px" height="50px" objectFit='contain' />
        </div>
      </Link>

      <div className="linksContainer">
        <Link to="home" smooth={true} offset={-70}>Home</Link>
        <Link to="projects" smooth={true} offset={-70}>Projects</Link>
        <Link to="skillsz" smooth={true} offset={-70}>Skills</Link>
        <Link to="about" smooth={true} offset={-70}>About</Link>
        <Link to="contact" smooth={true} offset={-70}>Contact</Link>
      </div>

      

      <div className="mobileMenuButton" onClick={() => setMenu(!menu)}>
        <div className={"line " + (menu ? "active" : "")}></div>
      </div>


      <div className="mobileMenuContainer">
        <div className={"mobileMenu " + (menu ? "active" : "")}>
          <Link to="home" smooth={true} offset={-70} onClick={() => setMenu(false)}>Home</Link>
          <Link to="projects" smooth={true} offset={-70} onClick={() => setMenu(false)}>Projects</Link>
          <Link to="skillsz" smooth={true} offset={-70} onClick={() => setMenu(false)}>Skills</Link>
          <Link to="about" smooth={true} offset={-70} onClick={() => setMenu(false)}>About</Link>
          <Link to="contact" smooth={true} offset={-70} onClick={() => setMenu(false)}>Contact</Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar