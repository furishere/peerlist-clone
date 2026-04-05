import React from 'react'
import { Peerlist } from './Icons/Peerlist'
import { ArrowRight } from './Icons/ArrowRight'

export const BottomInput = () => {
  return <div className='flex justify-center flex-col items-center'>
    <div className='flex justify-center-safe items-center font-hero flex-col mt-12'>
        <div className='text-4xl'> 
            Join a growing community of
        </div>
        <div className='text-4xl'>
            the most in(credible) people!
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
