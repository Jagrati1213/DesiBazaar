import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../reduxStore/AuthReducer';

function Profile() {
    
    //___ call methods from reducer
    const dispatch = useDispatch();
    
    //___ get current user
    const { userDetails } = useSelector(state => state.user);
    const currentUserIndex = userDetails.indexOf(userDetails.find((i) => i.isUser === true));

    //____ current user logout
    const handleLogout = useCallback(()=>{
        dispatch(logOut());
    },[dispatch]);

    // useEffect(()=>{},[dispatch]);
  return (
        <main className='w-full mt-[90px] min-h-screen flex items-center flex-col'>
            <div className='flex justify-evenly flex-col items-center rounded my-10 py-6 w-[900px]'>
                <h3 className='text-3xl text-slate font-semibold text-center'>
                    welcome  <span className='uppercase'>{userDetails[currentUserIndex].user.name}</span></h3>
                <button onClick={handleLogout} className='text-whiteSmoke bg-slate py-2 px-10 rounded mt-8 hover:bg-black'>Log Out</button>
            </div>
        </main>
  )
}
export default Profile;