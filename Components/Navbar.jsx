import React, {useState} from 'react';
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

      <div className="logoContainer">
        <Image src="/pictures/logo1.png" alt="logo" layout='fill' objectFit='contain' />
      </div>

      <ul>
        <li><Link href="/"><a className={router.pathname == "/" ? "active" : ""}>Home</a></Link></li>
        <li><Link href="/projects"><a className={router.pathname == "/projects" ? "active" : ""}>Projects</a></Link></li>
        <li><Link href="/services"><a className={router.pathname == "/services" ? "active" : ""}>Services</a></Link></li>
        <li><Link href="/about"><a className={router.pathname == "/about" ? "active" : ""}>About</a></Link></li>
        <li style={{marginRight: "0"}}><Link href="/contact"><a className={router.pathname == "/contact" ? "active" : ""}>Contact</a></Link></li>
      </ul>

      <button>Hire Me</button>

      <div className="mobileMenuButton" onClick={toggleMenu}>
        <div className={"line " + (menu ? "active" : "")}></div>
      </div>


      <div className="mobileMenuContainer">
        <div className={"mobileMenu " + (menu ? "active" : "")}>
          <li><Link href="/"><a className={router.pathname == "/" ? "active" : ""} onClick={closeMenu} >Home</a></Link></li>
          <li><Link href="/projects"><a onClick={closeMenu} className={router.pathname == "/projects" ? "active" : ""}>Projects</a></Link></li>
          <li><Link href="/services"><a onClick={closeMenu} className={router.pathname == "/services" ? "active" : ""}>Services</a></Link></li>
          <li><Link href="/about"><a onClick={closeMenu} className={router.pathname == "/about" ? "active" : ""}>About</a></Link></li>
          <li><Link href="/contact"><a onClick={closeMenu} className={router.pathname == "/contact" ? "active" : ""}>Contact</a></Link></li>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar