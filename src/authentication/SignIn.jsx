import React, { useState } from 'react';
import { Link } from "react-router-dom";

function SignIn() {

    const [inputfields, setInputFields] = useState({
        name:'',
        value:'',
    });
    const submitHandler = (event)=> {
      event.preventDefault()
      console.log('click');
    }
  return ( 
  <div className="min-h-screen  flex justify-center items-center">
        <div className="md:w-[400px] w-auto bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">

            <div className="relative md:h-48 h-28 bg-slate rounded-bl-4xl">
                    <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
            </div>
                
            <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
                    <h1 className="md:text-2xl text-xl font-semibold text-slate">Hello, Let's Connect!</h1>
                
                    <form className="mt-8"  onSubmit={ (e) => submitHandler(e)}>

                        {/* Name */}
                        <div className="relative">
                        <input id="name" name="name" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="john@doe.com" />
                        <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                        </div>

                        {/* Email */}
                        <div className="relative mt-8">
                        <input id="userName" name="userName" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="john@doe.com" />
                        <label htmlFor="userName" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">User Name</label>
                        </div>

                        {/* Password */}
                        <div className="mt-8 relative">
                        <input id="password" type="text" name="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="Password" />
                        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                        </div>

                        {/* Submit */}
                        <button type="sumbit" className="mt-8 px-4 py-2 rounded bg-slate hover:bg-black text-white font-semibold text-center block w-full focus:outline-none cursor-pointer" >
                            Sign In
                        </button>

                        <Link to='/login'> 
                            <p className='my-4 text-center'> already have account?
                              <span className='text-crimson mx-2 cursor-pointer hover:underline'>Log In</span>
                            </p>   
                        </Link>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default SignIn;