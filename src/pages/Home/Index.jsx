import React from 'react'
import { Craousel } from '../../components/slider/Craousel'
import LimitProduct from '../../components/LmitProduct'

function Home() {
  return (
    <main className='home mt-[-90px]'>
          <Craousel/>
          <LimitProduct baseurl={'https://fakestoreapi.com/products/category/jewelery'} title={"Jewelery"}/>
          <LimitProduct baseurl={'https://fakestoreapi.com/products/category/electronics'} title={"Electronics"}/>
    </main>
  )
}

export default Home; 