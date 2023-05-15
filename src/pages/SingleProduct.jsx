import React, { useEffect, useState } from 'react';
import { Col, Row,Image } from 'antd';
import { StarFilled } from "@ant-design/icons";
import { BsBagHeartFill } from "react-icons/bs";
import { IconContext } from 'react-icons';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItems, calculatePrice } from '../reduxStore/Reducer';
import { toast } from 'react-hot-toast';


function SingleProduct() {
 
  const [singlepr, setSinglePr] = useState(null);
  const [rate, setRate] = useState(0);

  // for get productId 
  const params = useParams();

  // for using additem
  const dispatch = useDispatch();

  // fetching single product
  const fetchSingleProduct = async()=>{

    await axios.get(`https://fakestoreapi.com/products/${params.producId}`)
     .then(res=> {
       setSinglePr(res.data)
       setRate(res.data?.rating?.rate)
     })
     .catch((err)=> console.log(err))
 }
   useEffect(()=>{
    fetchSingleProduct();
   },[params]);

  //  set product to addItem
   const addToCart = (singlepr)=>{
     toast.success('Add to Cart')
     dispatch(addItems(singlepr));
     dispatch(calculatePrice());

   }

  return (
    <main className='mt-[90px] w-full min-h-screen py-[4rem]'>
      {
        singlepr !== null?(
          <Row className='h-auto mx-[10rem]'>

            {/* SingleProduct Image */}
            <Col span={12} className='border-r-2 flex justify-center items-center p-4 overflow-hidden'>
            <Image.PreviewGroup
                preview={{
                  onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}>
                <Image width={500} src={singlepr.image} className='object-cover w-full'/>
            </Image.PreviewGroup>
            </Col>

            {/* SingleProduct Details */}
            <Col span={12} className='p-8'>
                
                <h1 className='text-3xl text-slate font-bold uppercase'>{singlepr.title}</h1>

                <p className='text-lg text-gray-500 break-words my-4'> {singlepr.description}</p>

                <p className='text-lg text-black break-words my-4 font-semibold'> Category: {singlepr.category}</p>

                <p className='text-lg text-black break-words my-4 font-bold'> <i className='font-normal'>Price :</i> ₹ {singlepr.price}</p>
                
                <div className='raiting py-7 text-yellow-500 flex items-center text-3xl'>      
                  {Array(Math.ceil(rate)).fill(null).map((_,i)=>{
                      return <StarFilled className='mx-1' key={i}/>

                    })
                  }
                </div>
                
                <button 
                onClick={()=>{ addToCart(singlepr) }} 
                  className='font-bold rounded text-whiteSmoke bg-slate hover:bg-black py-3 px-10 text-base my-10 flex items-center'>
                  <IconContext.Provider value={{size:'18px'}}><BsBagHeartFill className='mr-2'/> </IconContext.Provider>
                  <span>Add to bag</span>
                </button>
                
            </Col>
         </Row>
        ):(
          <h1> Somthing is wrong</h1>
        )
      }

    </main>
  )
}

export default SingleProduct;