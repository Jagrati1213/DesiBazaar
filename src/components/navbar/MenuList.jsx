import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingBag, FaHeart } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { IconContext } from 'react-icons';
import {Badge } from 'antd';
import { useSelector } from 'react-redux';

function MenuList({navbarOpen}) {

    //____ Get the Products from productSlice
    const {products} = useSelector(state => state.product);
        
    //____ Set the quantity to top
    const [count, setCount] = useState(0);

    useEffect(()=>{
        let bagCount = 0;
        products.map((item)=>{
            bagCount += Number(item.quantity);
        })
        setCount(bagCount);
    },[products]);

  return (
    <>
    <div className={`hidden w-full md:block md:w-auto z-50 menu${navbarOpen ? ' show-menu' : ''} `}>
        <ul className="flex flex-col p-4 md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:bg-white text-slate font-semibold hover:text-black text-lg  items-center">
           
            <li>
                <Link to="/" className="block py-4 px-3 text-slate hover:text-black md:p-0">Home</Link>
            </li>
            <li>
                <Link to="/product" className="block py-4 px-3 text-slate hover:text-black md:p-0">Product</Link>
            </li>
            <li className='md:my-0 my-4'>
                <IconContext.Provider value={{size:'18px'}}>
                    <Link to='/login' className="block p-2 bg-slate text-whiteSmoke rounded-full"> 
                      <GoPerson/>
                    </Link>
                </IconContext.Provider>           
            </li>

            <li className='md:my-0 my-4'>
                <IconContext.Provider value={{size:'18px'}}>
                    <Link to="/whislist" className="block p-2 bg-slate text-whiteSmoke rounded-full">
                        <FaHeart/>
                    </Link>
                </IconContext.Provider>
            </li>
            <li className='md:my-0 my-4'>
                <Badge count={count} showZero className="block text-slate">
                    <IconContext.Provider value={{size:'26px' ,color:'#2c4152'}}>
                            <Link to='/cart'><FaShoppingBag/></Link>
                    </IconContext.Provider>
                </Badge>
            </li>
        </ul>
    </div>
    </>
  )
}

export default MenuList