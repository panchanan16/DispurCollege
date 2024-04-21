import React from 'react'
import Achievents from '../super/achivement'
import Principal from '../super/principal'
import AboutCollege from '../super/aboutCollege'


const SuperSection = () => {
  return (
    <>
      <Achievents />
      <div className='flex gap-20 h-screen mt-20'>
        <AboutCollege />
        <Principal />
      </div>
    </>
  )
}

export default SuperSection;