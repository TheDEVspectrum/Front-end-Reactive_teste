import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav]= useState(false)
    const handleNav = () => setNav(!nav)

  return (
    <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className='logo'>
                <h2>AUTARQUIA360</h2>
            </div>
            
        <ul className="nav-menu">
            <li>MUNÍCIPIO</li>
            <li>AUTARQUIA360</li>
            <li>ATIVIDADE MUNICIPAL</li>
            <li>SERVIÇOS ONLINE</li>
            <li>CONTACTOS</li>
        </ul>
        <div className='nav-icons'>
            <BiSearch className='icon' style={{marginRight: '1rem'}}/>
            <AiOutlineInstagram className='icon'/>
            <AiOutlineFacebook className='icon'/>
        </div>
        <div className='hamburger' onClick={handleNav}>
            <HiOutlineMenuAlt4 className='icon'/>
        </div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
            <ul className='mobile-nav'>
                <li>MUNÍCIPIO</li>
                <li>AUTARQUIA360</li>
                <li>ATIVIDADE MUNICIPAL</li>
                <li>SERVIÇOS ONLINE</li>
                <li>CONTACTOS</li>
            </ul>
            <div className='mobile-menu-bottom'>
                <div className='menu-icons'>
                    <button>Search</button>
                </div>
                <div className='social-icons'>
                <AiOutlineInstagram className='icon'/>
                <AiOutlineFacebook className='icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar