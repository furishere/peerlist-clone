import React from 'react'
import resume from "../assets/resume-light.webp"

export const Sectionbottom = ({heading,paragraph, image}) => {
  return <div className='flex mt-4'>
    <div>
    <div className='font-semibold'>
     <div className='font-display text-black'>{heading}</div>
    </div>
    <div className='text-gray-800 font-display mt-3 text-sm'>
    {paragraph}</div>
    </div>
    <div className='border border-[#E4E3E9] rounded-lg w-xl h-xl'>
    <img src={image} alt="resume" />
    </div>
  </div>
}
