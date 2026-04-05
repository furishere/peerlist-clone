import React from 'react'
import { Arrow } from './Icons/Arrow'
import { Peerlist } from './Icons/Peerlist'
import { ArrowRight } from './Icons/ArrowRight'

export const Hero = () => {
  return <div className='flex justify-center items-center flex-col'>
    <div className='bg-[#0D0D0D] text-white px-3 py-1 rounded-full cursor-pointer flex text-sm mt-20'> 
    <div className='font-semibold p-1'> 🎉NEW: </div> 
    <div className='p-1'>
    Introducing Peerlist Ads 
    </div>
    <div className='p-1 items-center'>
    <Arrow />
    </div>
    </div>
    <div className="font-hero mt-10 text-5xl">
        <span className='italic'>The Professional Network </span><br />
        <div className='mt-2'>
        <span>for builders to show & tell!</span>
        </div>
    </div>
    <div className='font-display mt-5'>
        <div className='text-gray-600 text-lg cursor-pointer'>
        <span className='hover:text-green-400'> Showcase your work, </span> 
        <span className='hover:text-green-400'>launch project,</span> 
        <span className='hover:text-green-400'>find jobs</span>, and connnect with the</div> 

        <div className='flex justify-center'>
         <span className='items-center text-lg text-gray-800'>most (in)credible people</span>
        </div>
    </div>
    <div className='flex items-center border border-[#E4E3E9] p-3 px- py-3 rounded-xl w-full max-w-md mt-11 shadow-lg'>
    <div className='flex  items-center justify-around'>
    <div className='mt-1'>
    <Peerlist />
    </div>
    <div>
    <span className='font-semibold text-lg'>peerlist.io/</span> 
    <input className='outline-none text-lg' type="text" placeholder='username' />
    </div>
    </div>
    <div className='bg-[#878B94] rounded-xl p-1 ml-15'>
    <ArrowRight />
    </div>
    </div>
    <div className='font-display text-[#828997] mt-4 text-sm'>
        Claim your username before It's too late!
    </div>
  </div>
}
