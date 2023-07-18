import React, {useState, useEffect} from 'react'
import NavBrand from '../img/Brand.svg'

export default function Header() {
  const [active, setActive] = useState('nav-list')
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')

  const navToggle = () => {
    active === 'nav-list'
      ? setActive('nav-list nav__active')
      : setActive('nav-list')

    toggleIcon === 'nav__toggler'
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler")
  }

  const[navbar, setNavbar] = useState(false)

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
        setNavbar(true);
    } else {
        setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeNavbar);

  useEffect(() => {
  }, [])

  return (
    <header className='headerSection'>
      <div className="container">
        <nav className={`Navbar ${navbar ? 'navbarActive' : ''}`}>
          <div className="navBody">
            <a href='/'>
              <div className='nav-logo'>
                <img src={NavBrand} alt="..." />
              </div>
            </a>

            <ul className={active}>
              <li>
                <a onClick={navToggle}  className='nav-link' href="#">About</a>
              </li>
              <li>
                <a onClick={navToggle} className='nav-link' href="#">Blog</a>
              </li>
              <li>
                <a onClick={navToggle} className='nav-link' href="#">Contact</a>
              </li>
              <li>
                <a className='NavBtnList' href="#">Sign In</a>
              </li>
            </ul>
            <a className='NavBtn' href="#">Sign In</a>  

            <div onClick={navToggle} className={toggleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </nav>
      </div>

      <section className='heroSection'>
        <div className="container">
          <div className='heroContent'>
            <h2>Explore any kind of furnitures</h2>
            <h3>Better Furniture <br /> Better Living</h3>
            <a href="#">Check our projects</a>
          </div>
        </div>
      </section>
    </header>
  )
}
