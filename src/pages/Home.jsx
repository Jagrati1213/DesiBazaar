import React from 'react'
import { Craousel } from '../components/slider/Craousel'
import LimitProduct from '../components/lmitProduct/LimitProduct'

function Home() {
  return (
    <main className='h-full min-h-screen w-full'>
          <Craousel/>
          <LimitProduct baseurl={'https://fakestoreapi.com/products/category/jewelery'} title={"hello"}/>
          <LimitProduct baseurl={'https://fakestoreapi.com/products/category/electronics'} title={"Electronics"}/>
    </main>
  )
}

export  { Home }