import React, { useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaAmazon } from 'react-icons/fa';
import { FaWindows } from 'react-icons/fa';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className='flex flex-col items-start justify-start bg-gray-50 p-10 rounded-xl w-[90%] md:w-[40%] border border-white'>
      <h2 className='font-medium text-3xl mb-6'>Create Account</h2>
      <form className='w-full space-y-3'>
        <div className='relative'>
          <input type='text' id='name' required className='peer w-full rounded-md p-3 placeholder-transparent outline-none' placeholder='Name' />
          <label
            htmlFor='name'
            className='absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-500 transition-all'
          >
            Name
          </label>
        </div>
        <div className='relative'>
          <input type='email' id='email' required className='peer w-full rounded-md p-3 placeholder-transparent outline-none' placeholder='Email' />
          <label
            htmlFor='email'
            className='absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-500 transition-all'
          >
            Email
          </label>
        </div>
        <div className='relative'>
          <input type='tel' id='phone' required className='peer w-full rounded-md p-3 placeholder-transparent outline-none' placeholder='Phone Number' />
          <label
            htmlFor='phone'
            className='absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-500 transition-all'
          >
            Phone Number
          </label>
        </div>
        <div className='relative'>
          <input
            type={showPassword ? 'text' : 'password'}
            id='password'
            required
            className='peer w-full rounded-md p-3 placeholder-transparent outline-none pr-10'
            placeholder='Password'
          />
          <label
            htmlFor='password'
            className='absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-500 transition-all'
          >
            Password
          </label>
          <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-3 top-3 text-gray-500 hover:text-gray-700 focus:outline-none'>
            {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
          </button>
        </div>
        <div className='flex items-center space-x-2 py-4'>
          <input
            type='checkbox'
            id='rememberMe'
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className='w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-1'
          />
          <label htmlFor='rememberMe' className='text-gray-700 cursor-pointer'>
            Remember Me
          </label>
        </div>
        <button className='w-full bg-teal-600 text-white py-2 rounded-xl hover:bg-teal-400 transition'>Create an account</button>
      </form>
      <div className='flex items-center w-full mt-5'>
        <span className='flex-grow bg-gray-200 rounded h-[1.5px]'></span>
        <span className='mx-3 text-sm'>Or continue with</span>
        <span className='flex-grow bg-gray-200 rounded h-[1.5px]'></span>
      </div>
      <div className='flex items-center justify-center gap-2 w-full mt-5'>
        <span className='bg-white cursor-pointer p-2 w-full rounded-lg flex items-center justify-center'>
          <FcGoogle size={25} className='text-center' />
        </span>
        <span className='bg-white cursor-pointer p-2 w-full rounded-lg flex items-center justify-center'>
          <FaAmazon size={25} />
        </span>
        <span className='bg-white cursor-pointer p-2 w-full rounded-lg flex items-center justify-center'>
          <FaWindows size={25} className='text-sky-500' />
        </span>
      </div>
      <div className='flex items-center justify-center mt-5 w-full'>
        <p className='text-xs opacity-70'>
          Already have an account? <u className='cursor-pointer'>log in</u>
        </p>
      </div>
      <div className='flex items-center justify-center mt-5 w-full'>
        <p className='text-xs opacity-70'>
          By clicking "continue", you agree to our <u className='cursor-pointer'>Terms and Conditions</u>
        </p>
      </div>
    </div>
  );
};

export default Register;
