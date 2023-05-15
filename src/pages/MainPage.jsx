import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Product } from './Product';
import { Header } from '../components/navbar/Header'
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import { Toaster } from "react-hot-toast";
import Wishlist from './Wishlist';

function MainPage() {
  return (
    <Router>
    <main className='h-full min-h-screen w-full'>
        <Header/>
     <Routes>
        <Route index element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:producId' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/whislist' element={<Wishlist />} />
      </Routes>
      <Toaster/>
      </main>
    </Router>
  )
}

export {MainPage}