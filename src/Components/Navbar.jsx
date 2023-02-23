import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import logo from '../Images/logo2.png'

export default function Navbar() {
    return (
    <>
        <nav className='px-7 py-6 border border-b'>
            <ul className="navbar flex gap-4 text-gray-600 text-sm ">
                <li className=''>Phone Number: +91 1234567890</li>
                <li className=''>Email: noreply@yourdomain.com</li>
                <ul className='flex gap-6'>
                    <li><a className='cursor-pointer'><FaFacebookF/></a></li>
                    <li><a className='cursor-pointer'><BsTwitter/></a></li>
                    <li><a className='cursor-pointer'><BsLinkedin/></a></li>
                    <li><a className='cursor-pointer'><BsInstagram/></a></li>
                </ul>
            </ul>
            
        </nav>
        <nav className='flex justify-between items-center shadow-lg px-7 h-32 '>
            <div>
                <img src={logo} alt="" className='hidden h-32 w-32 lg:block' />
            </div>
            <ul className='flex gap-4'>
                <li><a className='cursor-pointer'>Home</a></li>
                <li><a className='cursor-pointer'>About Us</a></li>
                <li><a className='cursor-pointer'>Programme</a></li>
                <li><a className='cursor-pointer'>Support Us</a></li>
                <li><a className='cursor-pointer'>Gallery</a></li>
                <li><a className='cursor-pointer'>Donate Us</a></li>
                <li><a className='cursor-pointer'>Contact Us</a></li>
                <li className=''><a className='bg-green-400 text-white px-14 py-7 font-bold cursor-pointer'>Donate</a></li>
            </ul>
        </nav>

    </>
  )
}
