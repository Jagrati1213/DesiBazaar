import React from 'react';
import LimitProduct from '../../components/LmitProduct';

function AllProduct() {  
  return (
    <main className='all_product'>
      <LimitProduct baseurl={'https://fakestoreapi.com/products'} title={'All products'}/>
    </main>
  )
}

export default AllProduct;