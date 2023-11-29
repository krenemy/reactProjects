import React from 'react'
import P41 from './P41'

function P4() {
  return (
    <div className='h-full w-full  flex flex-col justify-center items-center space-y-6 bg-[#02042B] text-[#F2F3FF] px-4'>
      <p className='text-3xl pt-6'>Explore RazorpayX powered Business Bankin</p>
      <hr className='w-40 h-2'/>
      <div className='flex flex-row border-2 border-slate-500 px-2 py-4 space-x-4 m-2'>
        <div className='flex flex-col space-y-2 min-h-fit'>
          <div className='space-y-16 px-2'>
          <div className='flex flex-col'>
            <p className='text-2xl font-bold'>Manage your company’s finances and</p>
            <p className='text-2xl font-bold'>supercharge your business banking with Razorpay X</p>
            </div>
            <ul className='space-y-2'>
              <li>Open a fully digital current account</li>
              <li>Automate payables & compliment payments</li>
              <li>Simplify and track spends with Corporate cards</li>
              <li>View financial insights at a glance</li>
            </ul>
            <div className='space-x-2'>
              <button className='border-1 rounded-md bg-blue-500 hover:bg-blue-400 p-3'>Know More</button>
              <button className='rounded-md text-blue-400 hover:text-blue-300 p-3'>Sign Up</button>
            </div>
          </div>
        </div>
        <div className='hidden md:flex w-80'>
        <img src="https://razorpay.com/build/browser/static/payment-suite.c8ef898b.png" alt="" />
        </div>
      </div>
      <div className='flex flex-row items-center flex-wrap gap-4 justify-center m-2'>
        <P41></P41>
        <P41></P41>
        <P41></P41>
      </div>
      <div className='m-2 flex flex-row border-2 border-slate-500 space-x-2 px-2 py-3 justify-center items-center'>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, laudantium. Accusamus, rem?</h3>
        <button className='border-1 rounded-md bg-blue-500 hover:bg-blue-400 p-3'
        >Check Out Demo</button>
      </div>
    </div>
  )
}

export default P4