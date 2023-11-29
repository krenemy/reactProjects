import React from 'react'
import P43 from './P43'
import './App.css'
function P42() {
    
  return (
    <nav className='z-10 p-6 flex h-[100px] fixed w-full flex-row justify-around text-white bg-[#02042A]'>
        <div className='flex flex-row justify-center items-center gap-1'>
            <img className='w-20 h-12'
            src="https://d6xcmfyh68wv8.cloudfront.net/assets/razorpay-glyph.svg" alt="" />
            <h2 className='justify-center items-center text-3xl'>Razorpay</h2>
        </div>
        <div className='hidden md:flex'>
            <ul className='flex flex-row items-center justify-center gap-2'>
                <li className="dropdown">Payments
                <div className='dropdown-content flex flex-row p-4 gap-2 text-black w-full'>
                <div className='flex grid grid-cols-2 gap-2'>
                {/* <h2>Accept payments online</h2> */}
                <div className='a'><P43></P43></div><div className='a'><P43></P43></div>
                <div className='a'><P43></P43></div><div className='a'><P43></P43></div>
                <div className='a'><P43></P43></div><div className='a'><P43></P43></div>
                <div className='a'><P43></P43></div><div className='a'><P43></P43></div>
                <div className='a'><P43></P43></div><div className='a'><P43></P43></div>
                <div className='a'><P43></P43></div><div className='a'><P43></P43></div>
                </div>
                {/* <div className='flex flex-col gap-2'>
                <h2>Accept payments online</h2>
                <div className='a'><P43></P43></div>
                <div className='a'><P43></P43></div>
                <div className='a'><P43></P43></div>
                </div> */}
                </div>
                </li>
                <li>Banking</li>
                <li>Credit</li>
                <li>Payroll</li>
                <li>Support</li>
                <li>Pricing</li>
            </ul>
        </div>
        

        <div className='justify-center items-center flex flex-row gap-3'>
            <button
            className='border-2 px-4 border-[#2B84EA] py-2'>Login</button>
            <button className='hidden bg-white text-blue-400 border-2 px-4 py-2 hover:text-blue-500 sm:flex'>Sign Up -_-</button>
            <div 
            className='flex md:hidden'>^-^</div>
            
        </div>
    </nav>
  )
}

export default P42