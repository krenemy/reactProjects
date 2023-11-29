import React from 'react'
import P41 from './P41'

function P44() {
  return (
    <>
    <div className='absolute top-20'><img className='w-20' src="https://razorpay.com/build/browser/static/x-flame-1.56d9277e.png" alt="" /></div>
    <div className='h-full w-full  flex flex-col justify-center items-center space-y-6 bg-white text-black mt-[100px]'>
      <p className='text-3xl pt-6 font-bold justigy-center items-center'>Accept Payments with Razorpay Payment Suite</p>
      <hr className='w-40 h-2 bg-yellow'/>
      <div className='flex flex-row border-2 px-2 py-4 space-x-4 m-2'>
        <div className='flex flex-col space-y-2 min-h-fit items-center justify-center'>
          <div className='space-y-16 px-2'>
            <div className='flex flex-col'>
            <p className='text-2xl font-bold'>Supercharge your business with</p>
            <p className='text-2xl font-bold'>the all‑powerful Payment Gateway</p>
            </div>
            <ul className='space-y-2'></ul>
            <ul className='space-y-2'>
              <li>100+ Payment Methods</li>
              <li>Industry Leading Success Rate</li>
              <li>Superior Checkout Experience</li>
              <li>Easy to Integrate</li>
              <li>Instant Settlements from day 1</li>
              <li>In-depth Reporting and Insights</li>
            </ul>
            <div className='space-x-2 text-white'>
              <button className='border-1 rounded-md bg-blue-500 hover:bg-blue-400 p-3'>Sign Up</button>
              <button className='border-1 rounded-md bg-blue-500 hover:bg-blue-400 p-3'>Know More</button>
            </div>
          </div>
        </div>
        <div className='hidden md:flex md:w-80'>
        <img src="https://razorpay.com/build/browser/static/payment-suite.c8ef898b.png" alt="" />
        </div>
      </div>
      <div className='grid grid-cols-3 items-center flex-wrap gap-10 justify-center p-2'>
        <P41></P41>
        <P41></P41>
        <P41></P41>
        <P41></P41>
        <P41></P41>
        <P41></P41>
      </div>
      <div className='m-2 flex flex-row border-2 space-x-2 px-2 py-3 justify-center items-center'>
        <h3>Not sure which product to choose?
Answer a few questions and we'll help you out</h3>
        <button className='border-1 rounded-md bg-blue-500 hover:bg-blue-400 p-3'
        >Find me a product</button>
      </div>
    </div>
    </>
  )
}

export default P44