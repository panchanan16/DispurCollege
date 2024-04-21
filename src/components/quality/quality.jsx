import React from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Quality = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center mt-20'>
        <div style={{backgroundImage: "url('/bg-2nd.png')", width: "85vw", aspectRatio: 16/9}} className='bg-cover flex flex-col justify-start items-center gap-[6rem] rounded-lg shadow-xl'>
           <div className='mt-[7rem]'>
              <h2 className='text-4xl font-semibold'>Why to choose us ??</h2>
           </div>
           <div className='flex w-full justify-evenly'>
              <div className='flex flex-col items-center justify-center gap-5'>
                 <div className='border-4 border-dashed border-blue-300 rounded-full p-8'>
                  <AccountBalanceIcon className='text-blue-950 text-[5rem]' />
                 </div>
                 <h3 className='text-2xl font-bold'>CCPC</h3>
                 <h4 className=''>Career Counselling & Placement Cell (CCPC)</h4>
              </div>
              <div className='flex flex-col items-center justify-center gap-5'>
                 <div className='border-4 border-dashed border-blue-300 rounded-full p-8'>
                    <AutoStoriesIcon className='text-blue-950 text-[5rem]' />
                 </div>
                 <h3 className='text-2xl font-bold'>IQAC</h3>
                 <h4>Career Counselling & Placement Cell (CCPC)</h4>
              </div>
              <div className='flex flex-col items-center justify-center gap-5'>
                 <div className='border-4 border-dashed border-blue-300 rounded-full p-8'>
                    <GroupsIcon className='text-blue-950 text-[5rem]' />
                 </div>
                 <h3 className='text-2xl font-bold'>Committees & Association</h3>
                 <h4>Career Counselling & Placement Cell (CCPC)</h4>
              </div>
           </div>
           <button className='bg-blue-950 p-4 text-white font-semibold rounded-xl shadow-xl w-[20rem]'>Go to Admission Section</button>
        </div>
    </div>
  )
}

export default Quality