// import React, { useCallback, useEffect, useState } from 'react';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../reduxStore/AuthReducer';
import { Image, List } from 'antd';
// import { Link } from 'react-router-dom';

function Profile() {


    // const [data, setData] = useState([]);
    
    //___ call methods from reducer
    const dispatch = useDispatch();
    
    //___ get current user
    const { userDetails } = useSelector(state => state.user);
    const currentUser = userDetails.find(ele => ele.isUser === true);
  
    //____user logout
    const handleLogout = useCallback(()=>{
        dispatch(logOut());
    },[dispatch]);

//   useEffect(()=>{},[dispatch]);

  return (
        <main className='profile flex items-center flex-col'>
            <div className='flex md:justify-between justify-center items-center rounded my-10 py-6 w-[90%] flex-wrap md:flex-row flex-col'>
                <h3 className='text-3xl text-slate font-semibold text-center'>
                    welcome  <span className='uppercase'>{currentUser.user.name}</span></h3>
                <button onClick={handleLogout} className='text-whiteSmoke md:mt-0 mt-8 bg-slate py-2 px-10 rounded hover:bg-black'>Log Out</button>
            </div>

            {/* OrderList Items */}
            {
                <div className='border-t-2 p-10 w-[90%] px-10 rounded'>
                    <p className='text-xl pb-8'>My Orders</p>
                    <List
                        itemLayout="horizontal"
                        dataSource={currentUser.userOrder}
                        renderItem={(item)=>
                            (
                            <List.Item scroll={{ x: 1500,y: 300,}}>
                                <List.Item.Meta
                                    avatar={<Image src={item.cartItem.image} style={{ width: "50px", height: "50px" }}/>}
                                    title={item.cartItem.title}
                                    description={`${Math.ceil(item.cartItem.price)}`}
                                />
                            </List.Item>
                        )}/> 
                </div>
             
            }
        </main>
  )
}
export default Profile;