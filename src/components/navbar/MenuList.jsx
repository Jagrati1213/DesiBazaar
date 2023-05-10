import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaHeart } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { IconContext } from 'react-icons';
import {Badge } from 'antd';

function MenuList({navbarOpen}) {

  return (
    <>
    <div className={`hidden w-full md:block md:w-auto z-50 menu${navbarOpen ? ' show-menu' : ''} `} id="navbar-default">
        <ul className="flex flex-col p-4 md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:bg-white text-slate font-semibold hover:text-black text-lg  items-center">
           
            <li>
                <Link to="/" className="block py-4 px-3 text-slate hover:text-black md:p-0">Home</Link>
            </li>
            <li>
                <Link to="/product" className="block py-4 px-3 text-slate hover:text-black md:p-0">Product</Link>
            </li>
            <li className='md:my-0 my-4'>
                <a href="#" className="block p-2 bg-slate text-whiteSmoke rounded-full"> 
                        <IconContext.Provider value={{size:'18px'}}><GoPerson/></IconContext.Provider>
                </a>
            </li>
            <li className='md:my-0 my-4'>
                <a href="#" className="block p-2 bg-slate text-whiteSmoke rounded-full">
                    <IconContext.Provider value={{size:'18px'}}><FaHeart/></IconContext.Provider>
                </a>
            </li>
            <li className='md:my-0 my-4'>
                <a href="#" className="block p-2 text-slate">
                    <Badge count={0} showZero>
                        <IconContext.Provider value={{size:'26px' ,color:'#2c4152'}}><FaShoppingBag/></IconContext.Provider>
                    </Badge>
                </a>
            </li>
        </ul>
    </div>
    </>
  )
}

export default MenuList