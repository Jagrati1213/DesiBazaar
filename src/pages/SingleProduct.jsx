import React from 'react';
import { Col, Row,Image,StarFilled } from 'antd';


function SingleProduct() {


  return (
    <main className='mt-[90px] w-full min-h-screen py-[4rem]'>
    <Row className=' h-auto mx-[10rem]'>
      <Col span={12} className='border flex justify-center items-center h-3/6 p-4'>
      <Image.PreviewGroup
          preview={{
            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <Image width={500} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" className=' object-cover w-full' />
      </Image.PreviewGroup>
      </Col>
      <Col span={12} className='border p-8'>
          
          <h1 className='text-3xl text-slate font-bold uppercase'>
            TITLE
          </h1>
          <p className='text-lg text-gray-500 break-words my-4'> 
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque laborum eius sed.
          </p>
          <p className='text-lg text-black break-words my-4 font-semibold'> 
              Category
          </p>
          <p className='text-lg text-black break-words my-4 font-bold'> 
              ₹ 2344
          </p>
          <div className='raiting py-12 bg-red-300'>
            <p>hello</p>
            {[Array(3).map((_,index)=>{
                 return<StarFilled key={index} />
              })
              ]}
          </div>
          

      </Col>
    </Row>
    </main>
  )
}

export default SingleProduct;