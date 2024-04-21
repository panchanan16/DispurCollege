import React from 'react'
import "./css/highlight.css"
import AppShortcutIcon from '@mui/icons-material/AppShortcut';

const Highlight = () => {
    return (
        <div className='mt-10 w-full'>

            <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center justify-center gap-3'>
                    <h2 className='text-4xl font-bold'>Highlights</h2>
                    <AppShortcutIcon className='text-4xl text-[#fcb045]' />
                </div>
                <div>
                    <div class="carousel__container">
                        <div class="carousel-item">
                            <img
                                class="carousel-item__img"
                                src="/highlight/high1.jpeg"
                                alt="people"
                            />
                            <div class="carousel-item__details">
                                <div class="controls">
                                    <span class="fas fa-play-circle"></span>
                                    <span class="fas fa-plus-circle"></span>
                                </div>
                                <div className='flex flex-col items-center justify-center -mt-10'>
                                    <h5 class="carousel-item__details--title">Descriptive Title</h5>
                                    <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img
                                class="carousel-item__img"
                                src="/highlight/high2.jpeg"
                                alt="people"
                            />
                            <div class="carousel-item__details">
                                <div class="controls">
                                    <span class="fas fa-play-circle"></span>
                                    <span class="fas fa-plus-circle"></span>
                                </div>
                                <div className='flex flex-col items-center justify-center -mt-10'>
                                    <h5 class="carousel-item__details--title">Descriptive Title</h5>
                                    <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img
                                class="carousel-item__img"
                                src="/highlight/high3.jpeg"
                                alt="people"
                            />
                            <div class="carousel-item__details">
                                <div class="controls">
                                    <span class="fas fa-play-circle"></span>
                                    <span class="fas fa-plus-circle"></span>
                                </div>
                                <div className='flex flex-col items-center justify-center -mt-10'>
                                    <h5 class="carousel-item__details--title">Descriptive Title</h5>
                                    <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img
                                class="carousel-item__img"
                                src="/highlight/high4.jpeg"
                                alt="people"
                            />
                            <div class="carousel-item__details">
                                <div class="controls">
                                    <span class="fas fa-play-circle"></span>
                                    <span class="fas fa-plus-circle"></span>
                                </div>
                                <div className='flex flex-col items-center justify-center -mt-10'>
                                    <h5 class="carousel-item__details--title">Descriptive Title</h5>
                                    <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img
                                class="carousel-item__img"
                                src="/highlight/high5.jpeg"
                                alt="people"
                            />
                            <div class="carousel-item__details">
                                <div class="controls">
                                    <span class="fas fa-play-circle"></span>
                                    <span class="fas fa-plus-circle"></span>
                                </div>
                                <div className='flex flex-col items-center justify-center -mt-10'>
                                    <h5 class="carousel-item__details--title">Descriptive Title</h5>
                                    <h6 class="carousel-item__details--subtitle">Date and Duration</h6>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlight