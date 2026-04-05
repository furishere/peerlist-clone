import React from 'react'
import { Peerlist } from './Icons/Peerlist'
import { ArrowRight } from './Icons/ArrowRight'
import Launchpad from "../assets/project-light.webp"

export const Section = ({heading, subHeading, button, paragraph, image, paragraph2}) => {
  return <div className='mt-10'>
    <div>
      <div className='flex gap-2 font-normal'>
      <Peerlist />
      <div className='text-md font-display text-black'>{heading}</div>
      </div>
      <div className='flex gap-63 font-semibold mt-3'>
      <div className='font-display text-lg'>{subHeading}</div>
       <div className="bg-[#0D0D0D] rounded-xl text-white font-semibold border text-sm cursor-pointer shadow-sm flex w-full w-max px-4 py-1 ">
      <div>{button}</div>
      <div>
      <ArrowRight />
      </div>
    </div>
      </div>
    </div>
    <div className='text-md text-gray-800 font-display mt-3'>
      {paragraph}
    </div>
    <div className='text-md text-gray-800 font-display mt-3'>
      {paragraph2}
    </div>
    <img className='mt-7' src={ image } alt="launchbord" 
    height={100}
    width={600}/>
  </div>
}
