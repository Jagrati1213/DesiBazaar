import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { logIn } from '../Store/AuthReducer';
import Profile from '../pages/Profile/Index';
import { toast } from 'react-hot-toast';
import { Input } from 'antd';

function Login() {
    
    //___ get data from input 
    const [username,setUserName]= useState('');
    const [password,setPassword]= useState('');

    //____ used to call methods from reducer
    const dispatch = useDispatch();   
     
    //____ check the currentuser's status
    const { userExit } = useSelector(state => state.user);

    const handlerSubmit = useCallback((event) =>{
        event.preventDefault();

        //check is fields empty or not
        if(username ==='' && password ===''){
            toast.error('fill all fields')
        }else{
            dispatch(
                logIn(
                    { username:username.trim(),
                      password:password.trim()
                    })
                );
            setUserName('');
            setPassword('');
        }
    },[dispatch,password,username]);

    useEffect(()=>{},[userExit]);
  
  return ( 
    userExit ?
    <Profile/> :  
    (<div className="mt-10 flex justify-center items-center">
        <div className="md:w-[400px] w-auto bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">

        <div className="relative md:h-48 h-28 bg-slate rounded-bl-4xl">
                <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
        </div>
            
        <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
                <h1 className="md:text-2xl text-xl font-semibold text-slate">Welcome back!</h1>
        
                <form className="mt-8" onSubmit={handlerSubmit}>

                    {/* Email */}
                    <div>
                        <Input placeholder="Enter username" onChange={(e)=> setUserName(e.target.value)} value={username}/>
                    </div>

                    {/* Password */}
                    <div className="mt-8">
                       <Input.Password placeholder="Enter password"  onChange={(e)=> setPassword(e.target.value)} value={password}/>
                    </div>

                    {/* Submit */}
                    <button type="sumbit" className="mt-8 px-4 py-2 rounded bg-slate hover:bg-black text-white font-semibold text-center block w-full focus:outline-none cursor-pointer" >
                        Log In
                    </button>

                    <Link to='/signin'> 
                        <p className='my-4 text-center'> no account?<span className='text-crimson mx-2 cursor-pointer hover:underline'>Sign in</span></p>   
                    </Link>
                </form>
        </div>
        </div>
    </div>)
  )
}

export default Login