import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../reduxStore/AuthReducer';
function Profile() {
    
    const dispatch = useDispatch();

    // user logout
    const handleLogout = useCallback(()=>{
        dispatch(logOut());
    },[dispatch]);

    // useEffect(()=>{},[dispatch]);

  return (
        <main className='w-full mt-[90px] min-h-screen flex items-center flex-col'>
            <div className='flex justify-evenly flex-col items-center border-2 border-zinc-400 rounded m-5 py-6 w-[900px]'>
                <h3 className='text-3xl text-slate font-semibold text-center  uppercase'>Welcome,</h3>
                <button onClick={handleLogout} className='text-whiteSmoke bg-slate py-2 px-10 rounded mt-8 hover:bg-black'>Log Out</button>
            </div>
        </main>
  )
}

export default Profile;