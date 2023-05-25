import React from 'react'
import LimitProduct from '../components/LimitProduct'
import CraouselSlider from '../components/CraouselSlider';

function Home() {
  return (
    <main className='home mt-[-90px]'>
          <CraouselSlider/>
          <LimitProduct baseurl={'https://fakestoreapi.com/products/category/jewelery'} title={"Jewelery"}/>
          <LimitProduct baseurl={'https://fakestoreapi.com/products/category/electronics'} title={"Electronics"}/>
    </main>
  )
}

export default Home; 