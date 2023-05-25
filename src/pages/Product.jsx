import React from 'react';
import LimitProduct from '../components/LmitProduct/Index';

function Product() {  
  return (
    <main className='mt-[90px]'>
      <LimitProduct baseurl={'https://fakestoreapi.com/products'} title={'All products'}/>
    </main>
  )
}

export  { Product }