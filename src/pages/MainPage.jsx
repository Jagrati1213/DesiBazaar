import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Product } from '../pages/Product';
import { Navigation } from '../components/navbar/Navigation'
import SingleProduct from '../components/products/SingleProduct';
import Cart from './Cart';


function MainPage() {
  return (
    <Router>
    <main className='h-full min-h-screen w-full bg-blue-800'>
        <Navigation/>
     <Routes>
        <Route index element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </main>
    </Router>
  )
}

export {MainPage}