import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";

const Navbar = () => {

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const closeMenu = () => {
    setMenu(false)
  }

  const router = useRouter();

  return (
    <div className='navbar'>

      <Link href="/"  >
        <a href="" className="logoContainer" onClick={closeMenu}>
          <Image src="/pictures/k.png" alt="logo" width="50px" height="50px" objectFit='contain' />
        </a>
      </Link>

      <ul>
        <li><Link href="/"><a className={router.pathname == "/" ? "active" : ""}>Home</a></Link></li>
        <li><Link href="/projects"><a className={router.pathname == "/projects" ? "active" : ""}>Projects</a></Link></li>
        <li><Link href="/skills"><a className={router.pathname == "/skills" ? "active" : ""}>Skills</a></Link></li>
        <li><Link href="/about"><a className={router.pathname == "/about" ? "active" : ""}>About</a></Link></li>
        <li style={{ marginRight: "0" }}><Link href="/contact"><a className={router.pathname == "/contact" ? "active" : ""}>Contact</a></Link></li>
      </ul>

      <Link href="/contact" >
        <button className="btn">
          Hire Me
        </button>
      </Link>

      <div className="mobileMenuButton" onClick={toggleMenu}>
        <div className={"line " + (menu ? "active" : "")}></div>
      </div>


      <div className="mobileMenuContainer">
        <div className={"mobileMenu " + (menu ? "active" : "")}>
          <li><Link href="/"><a className={router.pathname == "/" ? "active" : ""} onClick={closeMenu} >Home</a></Link></li>
          <li><Link href="/projects"><a onClick={closeMenu} className={router.pathname == "/projects" ? "active" : ""}>Projects</a></Link></li>
          <li><Link href="/skills"><a onClick={closeMenu} className={router.pathname == "/skills" ? "active" : ""}>Skills</a></Link></li>
          <li><Link href="/about"><a onClick={closeMenu} className={router.pathname == "/about" ? "active" : ""}>About</a></Link></li>
          <li><Link href="/contact"><a onClick={closeMenu} className={router.pathname == "/contact" ? "active" : ""}>Contact</a></Link></li>
        </div>
      </div>

    </div>
  )
}

export default Navbar