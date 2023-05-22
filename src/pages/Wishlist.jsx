import React, { useCallback } from 'react';
import { Card,Col,Row } from 'antd';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { addItems, calculatePrice } from '../reduxStore/ProductReducer';
import { calculatePrice, removeListItem, userCartList } from '../reduxStore/AuthReducer';
import { CloseCircleFilled } from '@ant-design/icons';

const { Meta } = Card;

function Wishlist() {

    // const {listArr} = useSelector((state)=> state.product);

    //___Find current user
    const { userDetails } = useSelector(state => state.user);
    const currentUser = userDetails.find((i) => i.isUser === true);

    //_____ For Calling reducer methods 
    const dispatch = useDispatch();

    //_____ Set Product To Bag 
     const getItemId = useCallback((id)=>{
      currentUser.userWish.map((i)=>{ 
          /* find out that Id is exit in array if yes then return the element */
            const getItem =  currentUser.userWish.find((k)=> k.cartItem.id === id);
            if(getItem){
                // dispatch(addItems(i.item));
                dispatch(userCartList(i.cartItem));
                dispatch(calculatePrice());
            }
        })
     },[dispatch])

    //_____ Delete wishlist item
    const deleteList = useCallback((itemId)=>{
          dispatch(removeListItem(itemId));
    },[dispatch]);


  return (
    <main className='mt-[90px] w-full min-h-screen p-10 overflow-hidden'>
        <Row gutter={{ xs: 8, sm: 16, lg: 18 }} justify="space-center" className='w-100 gap-6'>
          {
            currentUser.userWish.length ?
            (
              currentUser.userWish.map((ele)=>{
                return(
                  <Col key={ele.cartItem?.id} className="gutter-row bg-white rounded py-4 border-2 relative"  xs={{span: 24, }} lg={{span: 6}} md={{span: 8}} style={{cursor:'pointer'}}> 

                        <span className='text-zinc-400 hover:text-slate absolute right-2 top-0 z-30 text-2xl' 
                              onClick={()=> deleteList(ele.cartItem?.id)}>
                                <CloseCircleFilled />
                        </span>
                        <Link to={`/product/${ele.cartItem.id}`}>
                          <Card style={{overflow:'hidden', marginBottom:'2rem', textAlign:'center', boxShadow:'none', border:'none'}} 
                                cover={
                              <div style={{ overflow: "hidden", height: "250px" , width:'100%'}}>
                                  <img alt="item"
                                        style={{width:'100%',objectFit:'contain',height:'100%',padding:'12px' }}
                                        src={ele.cartItem.image}
                                    />
                                </div>
                              }>
                              <Meta title={'hello'} description={`₹${Math.ceil(ele.cartItem.price)}`}/>
                            </Card>

                        </Link>
                       <button className='w-full py-4 px-6 text-slate border-t-2 uppercase text-md font-bold' onClick={()=> getItemId(ele.cartItem.id)}>
                                  move to bag
                        </button>
                  </Col>
                )
               })
            ):
            (
              <Col className='flex justify-center items-center border-2 py-20 flex-col mx-auto' span={16}>
                <p className='text-slate text-center font-semibold italic text-2xl'> Nothing you store 🫣</p>
                  <Link to='/'>
                    <button className='py-4 px-5 text-slate border-b-2 border-slate hover:text-black mt-10'> Continue to Shopping</button>
                  </Link>
              </Col>
            )
          }
        </Row>
    </main>
  )
}

export default Wishlist;