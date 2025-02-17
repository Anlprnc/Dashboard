import React from 'react';
import Image from 'next/image';

const FilesBoxes = () => {
  return (
    <div className='p-3 md:p-10 mt-5 md:mt-0'>
      <div className='relative w-full md:w-[90%] mx-auto bg-gray-50 rounded-xl overflow-hidden'>
        <div className='relative h-36 w-full'>
          <div className='absolute -bottom-2 left-[55%] -translate-x-1/2 w-[70%] h-32 bg-white rounded-lg border border-white overflow-hidden z-10'>
            <Image src='/orange-bg.jpg' alt='Photo 1' layout='fill' objectFit='cover' className='rounded-lg' />
          </div>
          <div className='absolute -bottom-6 left-[50%] -translate-x-1/2 w-[70%] h-32 bg-white rounded-lg border border-white overflow-hidden z-20'>
            <Image src='/green-bg.jpg' alt='Photo 2' layout='fill' objectFit='cover' className='rounded-lg' />
          </div>
          <div className='absolute -bottom-10 left-[45%] -translate-x-1/2 w-[70%] h-32 bg-white rounded-lg border border-white overflow-hidden z-30'>
            <Image src='/wind-turbine.jpg' alt='Photo 3' layout='fill' objectFit='cover' className='rounded-lg' />
          </div>
        </div>
        <div className='bg-gray-100 p-4 rounded-b-xl flex justify-between items-center relative z-50'>
          <div>
            <h2 className='font-semibold text-sm'>Photos</h2>
            <p className='text-xs text-gray-500'>123 files</p>
          </div>
          <span className='text-gray-400'>{'>'}</span>
        </div>
      </div>
      <div className='relative w-full md:w-[90%] mx-auto bg-gray-50 rounded-xl overflow-hidden mt-3'>
        <div className='relative h-36 w-full'>
          <div className='absolute -bottom-2 left-[55%] -translate-x-1/2 w-[70%] h-32 bg-white rounded-lg border border-white overflow-hidden z-10'>
            <Image src='/orange-bg.jpg' alt='Photo 1' layout='fill' objectFit='cover' className='rounded-lg' />
          </div>
          <div className='absolute -bottom-6 left-[50%] -translate-x-1/2 w-[70%] h-32 bg-white rounded-lg border border-white overflow-hidden z-20'>
            <Image src='/green-bg.jpg' alt='Photo 2' layout='fill' objectFit='cover' className='rounded-lg' />
          </div>
          <div className='absolute -bottom-10 left-[45%] -translate-x-1/2 w-[70%] h-32 bg-white rounded-lg border border-white overflow-hidden z-30'>
            <Image src='/wind-turbine.jpg' alt='Photo 3' layout='fill' objectFit='cover' className='rounded-lg' />
          </div>
        </div>
        <div className='bg-gray-100 p-4 rounded-b-xl flex justify-between items-center relative z-50'>
          <div>
            <h2 className='font-semibold text-sm'>Documents</h2>
            <p className='text-xs text-gray-500'>123 files</p>
          </div>
          <span className='text-gray-400'>{'>'}</span>
        </div>
      </div>
      <div className='relative w-full md:w-[90%] mx-auto bg-gray-50 rounded-xl overflow-hidden mt-3'>
        <div className='relative h-36 w-full'>
          <div className='absolute -bottom-2 left-[55%] -translate-x-1/2 w-[70%] h-32 bg-white rounded-lg border border-white overflow-hidden z-10'>
            <Image src='/orange-bg.jpg' alt='Photo 1' layout='fill' objectFit='cover' className='rounded-lg' />
          </div>
          <div className='absolute -bottom-6 left-[50%] -translate-x-1/2 w-[70%] h-32 bg-white rounded-lg border border-white overflow-hidden z-20'>
            <Image src='/green-bg.jpg' alt='Photo 2' layout='fill' objectFit='cover' className='rounded-lg' />
          </div>
          <div className='absolute -bottom-10 left-[45%] -translate-x-1/2 w-[70%] h-32 bg-white rounded-lg border border-white overflow-hidden z-30'>
            <Image src='/wind-turbine.jpg' alt='Photo 3' layout='fill' objectFit='cover' className='rounded-lg' />
          </div>
        </div>
        <div className='bg-gray-100 p-4 rounded-b-xl flex justify-between items-center relative z-50'>
          <div>
            <h2 className='font-semibold text-sm'>Reports</h2>
            <p className='text-xs text-gray-500'>123 files</p>
          </div>
          <span className='text-gray-400'>{'>'}</span>
        </div>
      </div>
    </div>
  );
};

export default FilesBoxes;
