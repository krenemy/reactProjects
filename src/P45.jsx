import React from 'react'

function P45() {
  return (
   <div className=' h-full w-full text-white bg-[#02042A] flex flex-col space-y-16 px-10'>
    <nav className='p-6 flex h-fit w-full flex-row justify-around text-white bg-[#02042A]'>
        <div className='flex flex-row justify-center items-center gap-1'>
            <img className='w-10 h-6'
            src="https://d6xcmfyh68wv8.cloudfront.net/assets/razorpay-glyph.svg" alt="" />
            <h2 className='justify-center items-center text-2xl'>Razorpay</h2>
        </div>
        <div className='hidden md:flex'>
            <ul className='flex relative flex-row items-center justify-center gap-2'>
                <li>Payments</li>
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
            <button className='bg-white text-blue-400 border-2 px-4 py-2 hover:text-blue-500'>Sign Up -_-</button>
        </div>
    </nav>
    <div className='flex flex-col sm:flex sm:flex-row'>
        <div className='flex flex-col space-y-8 justify-center items-center px-6'>
            <h2 className='text-bold text-4xl'>Power your finance, grow your business</h2>
            <hr className='w-20'/>
            <p className='text-[#B4B4C0] text-md'>Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.</p>
            <button className='border-1 rounded-md bg-blue-500 hover:bg-blue-400 p-3'
            >Sign Up Now</button>
        </div>
        <div className=''>
            <img src="https://razorpay.com/build/browser/static/x-graphic.b40f463e.png" alt="" />
        </div>
    </div>
   </div>
  )
}

export default P45