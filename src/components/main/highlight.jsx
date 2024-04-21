import React from 'react'
import "./css/highlight.css"
import AppShortcutIcon from '@mui/icons-material/AppShortcut';

const Highlight = () => {
    return (
        <div className='w-full mt-20'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center justify-center gap-3'>
                    <h2 className='text-4xl font-bold'>Highlights</h2>
                    <AppShortcutIcon className='text-6xl text-blue-900' />
                </div>
                <div>
                    <div className="carousel__container">
                        <div className="carousel-item">
                            <img
                                className="carousel-item__img"
                                src="/highlight/high1.jpeg"
                                alt="people"
                            />
                            <div className="carousel-item__details">
                                <div className="controls">
                                    <span className="fas fa-play-circle"></span>
                                    <span className="fas fa-plus-circle"></span>
                                </div>
                                <div className='flex flex-col items-center justify-center -mt-10'>
                                    <h5 className="carousel-item__details--title">Descriptive Title</h5>
                                    <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img
                                className="carousel-item__img"
                                src="/highlight/high2.jpeg"
                                alt="people"
                            />
                            <div className="carousel-item__details">
                                <div className="controls">
                                    <span className="fas fa-play-circle"></span>
                                    <span className="fas fa-plus-circle"></span>
                                </div>
                                <div className='flex flex-col items-center justify-center -mt-10'>
                                    <h5 className="carousel-item__details--title">Descriptive Title</h5>
                                    <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img
                                className="carousel-item__img"
                                src="/highlight/high3.jpeg"
                                alt="people"
                            />
                            <div className="carousel-item__details">
                                <div className="controls">
                                    <span className="fas fa-play-circle"></span>
                                    <span className="fas fa-plus-circle"></span>
                                </div>
                                <div className='flex flex-col items-center justify-center -mt-10'>
                                    <h5 className="carousel-item__details--title">Descriptive Title</h5>
                                    <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img
                                className="carousel-item__img"
                                src="/highlight/high4.jpeg"
                                alt="people"
                            />
                            <div className="carousel-item__details">
                                <div className="controls">
                                    <span className="fas fa-play-circle"></span>
                                    <span className="fas fa-plus-circle"></span>
                                </div>
                                <div className='flex flex-col items-center justify-center -mt-10'>
                                    <h5 className="carousel-item__details--title">Descriptive Title</h5>
                                    <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img
                                className="carousel-item__img"
                                src="/highlight/high5.jpeg"
                                alt="people"
                            />
                            <div className="carousel-item__details">
                                <div className="controls">
                                    <span className="fas fa-play-circle"></span>
                                    <span className="fas fa-plus-circle"></span>
                                </div>
                                <div className='flex flex-col items-center justify-center -mt-10'>
                                    <h5 className="carousel-item__details--title">Descriptive Title</h5>
                                    <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
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