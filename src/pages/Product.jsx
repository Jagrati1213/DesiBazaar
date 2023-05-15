import React from 'react';
import { Col, Row, Card } from 'antd';
import { Link } from 'react-router-dom';
import LimitProduct from '../components/lmitProduct/LimitProduct';

const { Meta } = Card;

function Product() {
    
  return (
    <main className='mt-[90px]'>
      <LimitProduct baseurl={'https://fakestoreapi.com/products'} title={'All products'}/>
    </main>
  )
}

export  { Product }