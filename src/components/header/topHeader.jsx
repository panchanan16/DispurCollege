"use client"

import React from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

const TopHeader = () => {
  return (
    <div className='flex items-center justify-evenly w-full bg-blue-950 h-[2rem] p-5'>
        <div className='flex gap-2 text-white text-sm'> 
           <FmdGoodIcon />
           Guwahati -781 006 , Assam, India.
        </div>
        <div className='flex gap-2 text-white text-sm'>
          <PhoneInTalkIcon />
          0361 - 3513202, 0361 - 3515332
        </div>
        <div className='flex gap-2 text-white text-sm'>
          < LocalPostOfficeIcon />
          dispurcollege1978@gmail.com
        </div>
    </div>
  )
}

export default TopHeader