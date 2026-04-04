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
    <div>
        The Professional Network <br />
        for builders to show & tell
    </div>
    <div className='font-display'>
        Showcase your work, launch project, find jons, and connnect with <br />
        the most(in)credible people
    </div>
    <div className='flex items-center border border-[#E4E3E9] p-3 px- py-4 rounded-xl w-full max-w-md'>
    <div className='flex  items-center justify-around'>
    <div className='mt-1'>
    <Peerlist />
    </div>
    <div>
    <span className='font-semibold text-lg'>peerlist.io/</span> 
    <input className='outline-none font-semibold text-lg' type="text" placeholder='username' />
    </div>
    </div>
    <div className='bg-[#878B94] rounded-xl p-1 ml-15'>
    <ArrowRight />
    </div>
    </div>
    <div className='font-display'>
        Claim your username before It's too late!
    </div>
  </div>
}
