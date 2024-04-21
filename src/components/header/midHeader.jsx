"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards';
import { EffectCoverflow, EffectCards, Pagination, Autoplay, Navigation } from 'swiper/modules';
import './slider.css'


const MidHeader = () => {
    return ( 
        <div className='flex items-center justify-evenly gap-10 mx-5'>
            {/* <div className='flex flex-col items-center gap-3'>
                <h1>Our Achivements certificates</h1>
                <div className='flex gap-3'>
                   
                </div>
            </div> */}
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-3xl'>Get learning</h1>
                <span className='text-5xl font-bold'>Education is powerfull</span>
                <span className='text-5xl font-bold'>Driver of development</span>
                <span className='text-sm max-w-[500px]'>Education is powerfull ioufhr erofche erfvcouhe efvcojhe rkvcb3e fehh efivuhce efvioueh wdohfvo.</span>   
            </div>
            <div>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCards, Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="/people1.jpeg" height="300px" width="700px" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/people1.jpeg" height="300px" width="800px" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/people3.jpg" height="300px" width="800px" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/people4.jpg" height="300px" width="800px" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default MidHeader