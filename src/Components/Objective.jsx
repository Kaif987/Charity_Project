import React from 'react'
import { GiClothes } from 'react-icons/gi';
import { MdFastfood } from 'react-icons/md';
import { MdNightShelter } from 'react-icons/md';


export default function Objective() {
  return (
    <section className='bg-services mt-20'>
        <div className='flex flex-col justify-center items-center'>
          <h3 className='text-green-400 text-lg font-semibold tracking-widest'>What we Are doing</h3>
          <h1 className='text-blue-900 text-4xl font-bold capitalize py-12'>We are in a mission to help the helpless</h1>
        </div>
        <div className='flex'>
          <section className='flex flex-col items-center '>
              <div className='bg-green-400 text-white h-20 w-20 rounded-full flex justify-center items-center'>
                <GiClothes className='w-10 h-10'/>
              </div>
            <h3  className='text-2xl text-blue-900 font-semibold py-5'>Clothes</h3>
            <p className='text-gray-600 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sint sapiente expedita quidem cupiditate incidunt.</p>
          </section>
          <section className='flex flex-col items-center '>
              <div className='bg-green-400 text-white h-20 w-20 rounded-full flex justify-center items-center'>
                <MdFastfood className='w-10 h-10'/>
              </div>
            <h3 className='text-2xl text-blue-900 font-semibold py-5'>Food</h3>
            <p className='text-gray-600 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sint sapiente expedita quidem cupiditate incidunt.</p>
          </section>
          <section className='flex flex-col items-center '>
            <div className='bg-green-400 text-white h-20 w-20 rounded-full flex justify-center items-center'>
              <MdNightShelter className='w-10 h-10'/>
            </div>
            <h3 className='text-2xl text-blue-900 font-semibold py-5'>Shelter</h3>
            <p className='text-gray-600 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sint sapiente expedita quidem cupiditate incidunt.</p>
          </section>
        </div>
    </section>
  )
}
