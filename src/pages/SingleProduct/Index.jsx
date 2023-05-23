import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row,Image } from 'antd';
import { StarFilled } from "@ant-design/icons";
import { BsBagHeartFill, BsHeartFill} from "react-icons/bs";
import { IconContext } from 'react-icons';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// import { addItems, addToList, calculatePrice } from '../reduxStore/ProductReducer';
import { toast } from 'react-hot-toast';
import { calculatePrice, userCartList, userWishList } from '../../reduxStore/AuthReducer';
import Style from './style.module.scss'


function SingleProduct() {
 
  const [singlepr, setSinglePr] = useState(null);
  const [rate, setRate] = useState(0);

  //____ Check is user loggin or not
  const { userExit } = useSelector(state => state.user);

  //_____ get carts, and wishlist carts
  /* const productDetails = useSelector(state => state.product.products);
     const listDetails = useSelector(state => state.product.li stArr);
  */
  
  //_____ For get productId 
  const params = useParams();

  //_____ For calling reducer's methods
  const dispatch = useDispatch();

  //_____ Fetching Single Product 
  const fetchSingleProduct = async()=>{

    await axios.get(`https://fakestoreapi.com/products/${params.producId}`)
     .then(res=> {
       setSinglePr(res.data)
       setRate(res.data?.rating?.rate)
     })
     .catch((err)=> console.log(err))
 }
   
 useEffect(()=> {
       fetchSingleProduct()
  },[params]);

  //_____ Set product to bag 
   const addToCart = useCallback((singlepr)=>{
    if(userExit){
      //  dispatch(addItems(singlepr));
       dispatch( userCartList(singlepr));
       dispatch(calculatePrice());
    }
    else{
      toast.error('Create Account..');
    }
    
   },[singlepr])

  //_____ Set product in wishList
  const addToWlist = useCallback((singlepr)=>{
    if(userExit){
        // dispatch(addToList(singlepr));
        dispatch( userWishList(singlepr));
    }else{
      toast.error('Create Account..');
    }
  },[singlepr])

// useEffect(()=>{},[dispatch]);

  return (
    <main className='mt-[90px] w-full py-[4rem]'>
      {
        singlepr !== null?(
          <Row className='h-auto xl:mx-[10rem] mx-2'>

            {/* SingleProduct Image */}
            <Col xs={{span:24,}} lg={{span:12,}} className={`${Style.image_height} lg:border-r-2 flex justify-center items-center p-4 overflow-hidden`}>
              <Image.PreviewGroup 
                  preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                  }}>
                  <Image width={500} src={singlepr.image}/>
              </Image.PreviewGroup>
            </Col>

            {/* SingleProduct Details */}
            <Col xs={{span:24,}} lg={{span:12,}} className='p-8'>
                
                <h1 className='lg:text-3xl text-2xl text-slate font-bold uppercase'>{singlepr.title}</h1>
                <p className='lg:text-lg text-base text-gray-500 break-words my-4'> {singlepr.description}</p>
                <p className='lg:text-lg text-base text-black break-words my-4 font-semibold'> Category: {singlepr.category}</p>
                <p className='lg:text-lg text-base text-black break-words my-4 font-bold'> <i className='font-normal'>Price :</i> ₹ {Math.ceil(singlepr.price)}</p>
                
                <div className='raiting py-2 text-yellow-500 flex items-center text-3xl'>      
                  {Array(Math.ceil(rate)).fill(null).map((_,i)=>{
                      return <StarFilled className='mr-1' key={i}/>
                    })
                  }
                </div>
                
             <div className='flex flex-wrap gap-2'>
               <button 
                onClick={()=>{ addToCart(singlepr) }} 
                  className='font-bold rounded text-whiteSmoke bg-slate hover:bg-black py-3 px-10  text-sm md:text-base  my-2 flex items-center'>
                  <IconContext.Provider value={{size:'18px'}}><BsBagHeartFill className='mr-2'/> </IconContext.Provider>
                  <span>Add to bag</span>
                </button>

                <button 
                onClick={()=>{ addToWlist(singlepr) }} 
                  className='font-bold rounded text-slate hover:border-black border border-zinc-400 py-3 px-10 text-sm md:text-base my-2 flex items-center'>
                  <IconContext.Provider value={{size:'18px'}}><BsHeartFill className='mr-2'/> </IconContext.Provider>
                  <span> Wishlist</span>
                </button>
             </div>
                
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