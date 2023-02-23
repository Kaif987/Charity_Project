import React from 'react'
import cover from "../Images/coverImage.jpg"
import { AiFillPhone } from 'react-icons/ai';

export default function Hero() {
  return (
    <div className='hero text-white flex flex-col justify-center px-16'>
        <div className=''>
          <h1 className='text-5xl font-bold pb-7'>Drive a Smile</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nulla ipsa ratione, nobis sunt ipsum inventore repellat voluptates numquam praesentium quo maiores et minima id odit repellendus, delectus perspiciatis expedita.</p>
          <div className='flex items-center gap-8 pt-10'>
            <a href="#" className='bg-green-400 text-white px-14 py-7 font-bold cursor-pointer'>Donate</a>
            <div className='flex gap-2 items-center text-lg'>
              <AiFillPhone className='text-green-400'/>
              <span >+91 1234567890</span>
            </div>
          </div>
        </div>
    </div>
  )
}
