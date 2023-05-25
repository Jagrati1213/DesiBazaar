import React from 'react'
import { Craousel } from '../../components/slider/Craousel'
import LimitProduct from '../../components/LmitProduct/Index'

function Home() {
  return (
    <main className='home'>
          <Craousel/>
          <LimitProduct baseurl={'https://fakestoreapi.com/products/category/jewelery'} title={"Jewelery"}/>
          <LimitProduct baseurl={'https://fakestoreapi.com/products/category/electronics'} title={"Electronics"}/>
    </main>
  )
}

export default Home; 