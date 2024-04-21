"use client"

import React from 'react'
import FiberNewIcon from '@mui/icons-material/FiberNew';
import './scroll.css'


const TopScroll = () => {
    return (
        <div className=''>
            <div className='flex gap-5 w-[68vw] overflow-x-scroll'>
                <div className='flex gap-2 text-sm text-slate-600 items-center w-fit'>
                    <FiberNewIcon className='text-red-700' />
                    <p className='w-fit'>B A, Bcom, final examination</p>
                </div>
                <div className='flex gap-2 text-sm text-slate-600 items-center'>
                    <FiberNewIcon className='text-red-700' />
                    B A, Bcom, final examination
                </div>
                <div className='flex gap-2 text-sm text-slate-600 items-center'>
                    <FiberNewIcon className='text-red-700' />
                    B A, Bcom, final examination
                </div>
                <div className='flex gap-2 text-sm text-slate-600 items-center'>
                    <FiberNewIcon className='text-red-700' />
                    B A, Bcom, final examination
                </div>
            </div>
        </div>
    )
}

export default TopScroll