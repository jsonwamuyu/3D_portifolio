import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {styles} from '../styles';
import { navLinks } from "../constants";
import {logo, menu, close} from "../assets"

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav className={`${styles.paddingX} w-full py-5 flex items-center fixed top-0 z-20 bg-primary`}>
      <div className='flex items-center justify-between max-w-7xl mx-auto w-full'>
        <Link to="/"
          className='flex items-center gap-2'
          onClick={() =>{
            setActive("");
            window.scrollTo(0,0)
          }}
        >
          <img src={logo} alt="logo" className='h-14 w-14 object-contain'/>
          <p className='cursor-pointer text-[18px] font-bold'>Johnson <span className='sm:block hidden'>| Muchiri</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 items-center justify-center'>
          {navLinks.map((item) =>(
            <li key={item.id}
            className={`${active === item.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(item.title)}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>

        Mobile Navigation
      </div>
    </nav>
  )
}

export default Navbar