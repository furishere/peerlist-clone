import React from 'react'
import profile from "../assets/thumbnail-light.webp"
import { ArrowRight } from './Icons/ArrowRight'
import { Peerlist } from './Icons/Peerlist'

export const Profile = () => {
  return <div className='mt-10'>
      <div>
        <div className='flex gap-2 font-normal'>
        <Peerlist />
        <div className='text-md font-display text-black'>Profile</div>
        </div>
        <div className='flex gap-30 font-semibold mt-3'>
        <div className='font-display text-lg'>Your most meaningful work profile!</div>
         <div className="bg-[#0D0D0D] rounded-xl text-white font-semibold border text-sm cursor-pointer shadow-sm flex w-full w-max px-4 py-1 ">
        <div> Create Profile</div>
        <div>
        <ArrowRight />
        </div>
      </div>
        </div>
      </div>
      <div className='text-md text-gray-800 font-display mt-3'>
        Proof of work is the only thing that works. Everything else is a cheap signal. Your Peerlist profile lets you showcase that in clean & beautiful way.
      </div>
      <div className='text-md text-gray-800 font-display mt-3'>
        It can be a replacement to your portfolio, no kidding!
      </div>
      <img className='mt-7' src={ profile } alt="launchbord" 
      height={100}
      width={600}/>
    </div>
}
