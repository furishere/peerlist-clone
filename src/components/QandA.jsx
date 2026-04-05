import React from 'react'

export const QandA = ({heading, paragraph1, paragraph2}) => {
  return <div className='mt-3'>
    <div className='font-semibold'>
    <div className='font-display text-black '>
       {heading}
    </div>
    </div>
    <div className='text-gray-800 font-display mt-3 text-sm'>
       {paragraph1}
    </div>
    <div className='text-gray-800 font-display mt-3 text-sm'>
        {paragraph2}
    </div>
  </div>
}
