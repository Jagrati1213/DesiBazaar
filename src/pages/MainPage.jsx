import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Product } from './Product';
import { Header } from '../components/navbar/Header'
import Cart from './Cart/Index';
import { Toaster } from "react-hot-toast";
import Wishlist from './Wishlist/Index';
import Login from '../authentication/Login';
import SignIn from '../authentication/SignIn';
import Checkout from './Checkout';
import OrderSuccess from './OrderSuccess';
import Footer from '../components/footer/Footer';
import SingleProduct from './SingleProduct/Index';

function MainPage() {
  return (
    <Router>
    <main className='h-full min-h-screen w-full overflow-x-hidden'>
        <Header/>
     <Routes>
        <Route index element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:producId' element={< SingleProduct/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/whislist' element={<Wishlist />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element={<OrderSuccess />} />
        <Route path='*' element='404 Page is not found' />
      </Routes>
      <Toaster/>
      <Footer/>
      </main>
    </Router>
  )
}

export {MainPage}