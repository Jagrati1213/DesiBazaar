import React from 'react'
import { Navigation } from '../components/navbar/Navigation'
import { Craousel } from '../components/Craousel'

function Home() {
  return (
    <main className='h-full min-h-screen w-full bg-blue-500'>
          <Navigation/>
          <Craousel/>
    </main>
  )
}

export default Home