import React from 'react'
import TopHeader from '../header/topHeader'
import MidHeader from '../header/midHeader'
import NavBar from '../header/navBar'
import InfoBar from '../header/infoBar'
import BottomHeader from '../super/achivement'

const Header = () => {
  return (
    <div className='w-full h-screen bg-blue-50'>
        <TopHeader />
        <NavBar />
        <InfoBar />
        <MidHeader />
    </div>
  )
}

export default Header