import React, {useState} from 'react'
import NavBrand from '../img/Brand.svg'
import {Icon} from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Navbar() {
  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }
  
  return (
    <section className='navSection'>
      <div className="container">
        <nav className={toggle?'navbar expanded':'navbar'}>
          <a className='logo' href="/">
            <img src={NavBrand} alt="Brand" />
          </a>
            <div className='toggle-icon' onClick={handleToggle}>
              {toggle?<Icon icon={x} size={40}/>:<Icon icon={menu} size={40}/>}
            </div>
            <ul className='navList'>
              <li><a className='navLink' href="#">About</a></li>
              <li><a className='navLink' href="#">Blog</a></li>
              <li><a className='navLink' href="#">Contact</a></li>
              <li><a className='NavBtnList' href="#">Sign In</a></li>
            </ul>

            <a className='NavBtn' href="#">Sign In</a>  
        </nav>
      </div>
    </section>
  )
}