import { Avatar, Col,List,Row,Steps } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
// import { calculatePrice, decrementItems, incrementItems } from '../reduxStore/ProductReducer';
import { userDecrementItems, calculatePrice, userIncrementItems, removeCartItem } from '../../reduxStore/AuthReducer';
import style from './style.module.scss'


function Cart() {

  //____ Get current User
  const { userDetails } = useSelector(state => state.user);
  const currentUser = userDetails.find((i) => i.isUser === true);

  //_____ Get Methods Reducre 
  const dispatch = useDispatch();

  //____ Decrement the Items
  const decrement = useCallback((itemId) =>{
        dispatch(userDecrementItems(itemId))
        dispatch(calculatePrice());
  },[dispatch]);

  //_____ Increment the Items 
  const increment = useCallback((itemId) =>{
        dispatch(userIncrementItems(itemId));
        dispatch(calculatePrice());
  },[dispatch]);

  //____Delete item
  const deletItem = useCallback((itemId)=>{
        dispatch(removeCartItem(itemId));
        dispatch(calculatePrice());
  },[dispatch]);


  return (
    <main className='cart'>
      <Row className='w-full mx-auto lg:flex-row flex-col'>
        { currentUser?.userCart.length > 0?
        (
          <>
             {/* Cart Step */}
             <Col  xs={{span: 24 }} xl={{span: 24}} className='md:p-8 p-3 flex justify-center items-center md:mb-10 mb-2'>
                <div className='w-[90%]'>
                    <Steps size="small"current={0}items={[{title: 'Cart',},{title: 'Payment',},{title: 'Sussess',},]}/>
                </div>
             </Col>

            {/* Cart Items */}
            <Col xs={{span: 24 }} xl={{span: 16}} className='md:px-8 px-3 lg:border-r-2'>
              <ul className={`${style.overscroll} h-4/5 overflow-y-scroll`}>
                 {
                   currentUser.userCart.map((ele,index)=>{
                    return(
                    <li className='flex my-10 sm:justify-between justify-start sm:flex-row flex-col' key={index}>

                      <div  className='flex sm:flex-row flex-col sm:justify-start justify-center sm:items-start items-center'>
                          <div className='p-4 lg:w-[200px] sm:w-[160px] w-44 lg:h-[200px] sm:h-[160px] h-44 flex justify-center'>
                            <img src={ele.cartItem?.image} alt="product " className='w-full object-contain'/>
                          </div>

                          <div className='p-4'>
                                <h3 className='text-lg text-slate font-bold'>
                                  {ele.cartItemx?.title}
                                </h3>
                                <p className='text-base text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis w-[200px]'>
                                  {ele.cartItem?.description}
                                </p>
                                <div className='flex items-center my-2 text-zinc-800 font-medium'> 
                                  <span className='mr-2'>Price : ₹{Math.ceil(ele.cartItem?.price)}</span>
                                </div>
                                <p onClick={()=>deletItem(ele.cartItem?.id)} className='text-crimson hover:underline cursor-pointer text-base'>
                                  Delete the item
                                </p>
                          </div>
                      </div>

                       <div className='p-4 flex justify-center items-baseline md:text-lg font-medium w-auto'>
                           <button className='py-0 px-2 rounded text-whiteSmoke bg-slate' onClick={()=> decrement(ele.cartItem?.id)}>-</button>
                           <span className='text-base text-center mx-4'>{ele?.quantity}</span>
                           <button className='py-0 px-2 rounded text-whiteSmoke bg-slate' onClick={()=> increment(ele.cartItem?.id)}>+</button>
                      </div>
                  </li>)
                  })
                 }
              </ul>
            </Col>

            {/* Cart items total */}
            <Col xs={{span: 24 }} xl={{span: 8}} className='sm:p-8 p-3 flex justify-center '>
                    <aside className='rounded xl:w-[500px] w-[-webkit-fill-available]'>
                        <div className=" bg-zinc-200 border p-6 w-auto text-[18px]">

                          <div className="item_total mt-4 overflow-hidden py-2 flex justify-between">
                            <div className="itemtotal-title">Item Total</div>
                            <div className="itemtotal-value">{currentUser.subTotal}</div>
                          </div>

                          <div className="delivertotal my-2 overflow-hidden py-2 flex justify-between">
                            <div className="delivertotal-title">Delivery Charge</div>
                            <div className="delivertotal-value">{currentUser.delivery}</div>
                          </div>

                          <div className="total border-t-2 border-black my-4 overflow-hidden py-2 flex justify-between pt-4">
                            <div className="total-title"> Grand Total</div>
                            <div className="total-value">{currentUser.total}</div>
                          </div>

                           <Link to='/checkout'>
                              <div className="checkout w-full bg-slate hover:bg-black text-whiteSmoke py-4 px-8 text-center rounded">
                                 <button className="checkout-cta">Order Now</button>
                              </div>
                          </Link>

                        </div>
                    </aside>
            </Col>
          </>
        ):
        (
        <div className='p-10 w-[90%] px-10 rounded mx-auto'>
            <List
                itemLayout="horizontal"
                dataSource={currentUser?.userCart}
                renderItem={(item)=>
                    (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.cartItem.image} />}
                            title={item.cartItem.title}
                            description={`${Math.ceil(item.cartItem.price)}`}
                        />
                    </List.Item>
                )}/> 
        </div>
        )
      }
      </Row>
        
    </main>
  )
}

export default Cart