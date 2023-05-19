import React, { useState } from 'react';
import ELogo from '../../images/Elogo.png';
import { IconContext } from 'react-icons';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import '../navbar/Header.css';
import MenuList from './MenuList';
import { Link } from 'react-router-dom';

function Header() {
 
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className=' w-full h-[90px] bg-white md:px-8 flex justify-between items-center flex-wrap shadow-lg fixed top-0 z-[110]'>
       
        <div className='md:w-auto w-full max-w-screen-xl flex flex-wrap items-center justify-between px-4' >

            {/* Logo */}
           <Link to="/" className='logo_img flex items-center md:w-36 w-[7rem] h-[-webkit-fill-available]'>
                 <img src={ELogo} alt="ajio logo" className='w-full object-cover mr-3'/>
            </Link>

            {/* Hamburger */}
            <button type="button" className="inline-flex md:hidden items-center p-2 ml-3 text-slate rounded-lg hover:text-black cursor-pointer" onClick={() => setNavbarOpen((prev) => !prev)}>
                <IconContext.Provider value={{size:'30px'}}>
                    {navbarOpen ? <GrClose/>:<AiOutlineMenuFold/>}
                </IconContext.Provider>
            </button>
        </div>
        
        {/* Menulist */}
        <MenuList navbarOpen={navbarOpen}/>

    </header>
  )
}

export  { Header }