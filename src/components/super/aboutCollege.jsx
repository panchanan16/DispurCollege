
import SchoolIcon from '@mui/icons-material/School';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const AboutCollege = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div className='flex flex-col items-center'>
            <div className='flex items-center'>
               <h2 className='text-5xl font-semibold'>About College</h2>
               <img src="/quote3d.png" alt="quote" className='mb-5' />
            </div>
            <div className='flex items-center'>  
                 <HorizontalRuleIcon className='w-[3rem]'/>
                 <SchoolIcon className='text-5xl' />
                 <HorizontalRuleIcon className='w-[3rem]'/>
            </div>
        </div>
        <div className='flex flex-col gap-10'>
            <p className='max-w-[45vw] text-slate-600 text-sm'>
            Dispur College was established in the periphery of beautiful Narakasur Hills way back in 1978 by some visionaries of the locality primarily to cater the needs of children of the working parents in the Capital secretariat of Assam. The College has already completed 44th years of its glorious existence having 12 academic departments both in Arts and Commerce Stream along with highly efficient vocational departments in BBA & BCA.The College has always been looking forward in creating a strong bond between students and teachers for better performance in academic and other related activities. The institution has a primary objective of facilitation of higher education to the socio economic backward section of the society. 
            </p>
           <div className='flex gap-20'>
           <button className='border-2 bg-blue-900 p-3 text-white rounded-2xl shadow-xl w-[200px] font-semibold'>Read More</button>
            <img src="/dots-1.png" alt="dots" width="100px"/>
           </div>
           <img src="/vector-2.png" alt="vector" width="100px" height="50px"/>
        </div>
    </div>
  )
}

export default AboutCollege