import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home  from '../Home/Index';
import { Header } from '../../components/navbar/Header'
import Cart from '../Cart/Index';
import { Toaster } from "react-hot-toast";
import Wishlist from '../Wishlist/Index';
import Login from '../../authentication/Login';
import SignIn from '../../authentication/SignIn';
import Checkout from '../Checkout/Index';
import OrderSuccess from '../OrderSuccess/Index';
import Footer from '../../components/footer/Footer';
import SingleProduct from '../SingleProduct/Index';
import AllProduct from '../AllProduct/Index';
import Error from '../Error/Index';

function MainPage() {
  return (
    <Router>
    <main className='h-full min-h-screen w-full overflow-x-hidden'>
        <Header/>

        <main className='mt-[90px] w-full min-h-screen py-8'>

     <Routes>
        <Route index element={<Home />} />
        <Route path='/product' element={<AllProduct />} />
        <Route path='/product/:producId' element={< SingleProduct/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/whislist' element={<Wishlist />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element={<OrderSuccess />} />
        <Route path='*' element={<Error/>} />
      </Routes>
      </main>
      <Toaster/>
      <Footer/>
      </main>
    </Router>
  )
}

export default MainPage;