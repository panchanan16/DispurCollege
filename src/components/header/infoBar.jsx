"use client"
import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, EffectCards, Pagination, Autoplay, Navigation } from 'swiper/modules';
import "./info.css"
import TopScroll from '../scroll/topScroll';

const InfoBar = () => {
    return (
        <div className='w-full flex justify-between items-start'>
            <div className='flex items-center '>
                {/* <Image src="/iso-9001.png" width={100} height={50}/> */}
                <img src="/iso-9001.png" alt="iso" width="63px" style={{ aspectRatio: 1 }} />
                <img src="/g20.png" alt="iso" width="80px" style={{ aspectRatio: 1 }} />
                <img src="/75.png" alt="iso" width="120px" height="40px" />
                <img src="/iso-210001.png" alt="iso" width="63px" style={{ aspectRatio: 1 }} />
            </div>
            {/* <TopScroll /> */}
        </div>
    )
}

export default InfoBar