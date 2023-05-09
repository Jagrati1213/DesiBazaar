import React, { useState } from 'react';
import ELogo from '../../images/Elogo.png';
import { FaShoppingBag, FaHeart } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { IconContext } from 'react-icons';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import '../navbar/Navigation.css';

function Navigation() {
 
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className=' w-full h-[90px] bg-white md:px-8 flex justify-between items-center flex-wrap shadow-lg'>
       
        <div className='md:w-auto w-full max-w-screen-xl flex flex-wrap items-center justify-between px-4' >

            {/* Logo */}
           <a href="#" className='logo_img flex items-center md:w-36 w-[7rem] h-[-webkit-fill-available]'>
                 <img src={ELogo} alt="ajio logo" className='w-full object-cover mr-3'/>
            </a>

            {/* Hamburger */}
            <button type="button" className="inline-flex md:hidden items-center p-2 ml-3 text-slate rounded-lg hover:text-black cursor-pointer" onClick={() => setNavbarOpen((prev) => !prev)}>
                <IconContext.Provider value={{size:'30px'}}>
                    {navbarOpen ? <GrClose/>:<AiOutlineMenuFold/>}
                </IconContext.Provider>
            </button>
        </div>

        {/* Menulist */}
        <div className={`hidden w-full md:block md:w-auto z-50 menu${navbarOpen ? ' show-menu' : ''} `} id="navbar-default">
                <ul className="flex flex-col p-4 md:p-0 border border-b-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:border-0 md:bg-white text-slate font-semibold hover:text-black text-lg  items-center">
                        <li>
                            <a href="#" className="block py-4 px-3 text-slate hover:text-black md:border-0 md:p-0">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-4 px-3 text-slate hover:text-black md:border-0 md:p-0">Product</a>
                        </li>
                        <li className='my-4'>
                            <a href="#" className="block p-2 bg-slate md:border-0  text-whiteSmoke rounded-full"> 
                                <IconContext.Provider value={{size:'20px'}}><GoPerson/></IconContext.Provider>
                            </a>
                        </li>
                        <li className='my-4'>
                            <a href="#" className="block p-2 bg-slate md:border-0 text-whiteSmoke rounded-full">
                               <IconContext.Provider value={{size:'20px'}}><FaHeart/></IconContext.Provider>
                            </a>
                        </li>
                        <li className=' my-4'>
                            <a href="#" className="block p-2 bg-slate md:border-0 text-whiteSmoke rounded-full">
                               <IconContext.Provider value={{size:'20px'}}><FaShoppingBag/></IconContext.Provider>
                            </a>
                        </li>
                </ul>
        </div>
    </header>
  )
}

export  { Navigation }