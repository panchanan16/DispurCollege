import Image from 'next/image';
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavBar = () => {
    return (
        <div className='flex justify-between items-start'>
            {/* Logo part */}
            <div className='flex flex-col items-center'>
                <div className='flex items-center'>
                    <Image src="/logo.png" width={90} height={50} />
                    <div className='flex flex-col gap-0'>
                        <span className='text-xl font-bold'>DISPUR COLLEGE</span>
                        <Image src="/dispur_college_name.png" width={200} height={10} />
                    </div>
                </div>
                
            </div>
            {/* extra images */}

            {/* extra links */}
            <div className='flex mt-8 pr-5'>
                <ul className='flex gap-10'>
                    <li className='text-sm text-neutral-600'>Home</li>
                    <li className='text-sm text-neutral-600'>About</li>
                    <li className='text-sm text-neutral-600'>Admission <KeyboardArrowDownIcon /></li>
                    <li className='text-sm text-neutral-600'>Libraray</li>
                    <li className='text-sm text-neutral-600'>Student corner <KeyboardArrowDownIcon /></li>
                    <li className='text-sm text-neutral-600'>Facility <KeyboardArrowDownIcon /></li>
                    <li className='text-sm text-neutral-600'>Departments <KeyboardArrowDownIcon /></li>
                    <li className='text-sm text-neutral-600'>UBA <KeyboardArrowDownIcon /></li>
                    <li className='text-sm text-neutral-600'>More <KeyboardArrowDownIcon /></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar