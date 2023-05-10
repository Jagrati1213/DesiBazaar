import React from 'react'
import { Craousel } from '../components/slider/Craousel'
import LimitProduct from '../components/lmitProduct/LimitProduct'

function Home() {
  return (
    <main className='h-full min-h-screen w-full'>
          <Craousel/>
          <LimitProduct/>
    </main>
  )
}

export  { Home }