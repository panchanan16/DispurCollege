
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const Achivements = () => {
  return (
   <div className='bg-blue-950 flex flex-col gap-10 items-center '>
      <div>
       <h1 className='text-4xl mt-10 font-bold text-white p-5'> Our Achivements <MilitaryTechIcon className='text-6xl text-yellow-500'/></h1>
      </div>
      <div className='flex'>  
        <div className='flex flex-col gap-3 items-center justify-center'>
          <img src="/certificate.png" width="85%" className='' style={{aspectRatio: 1/1}}/>
          <div className='text-xl font-semibold text-slate-200 pb-8'>
            SDG records in 2021
          </div>
        </div>
        <div className='flex flex-col gap-3 items-center justify-center'>
          <img src="/certificate.png" width="85%" className='' style={{aspectRatio: 1/1}}/>
          <div className='text-xl font-semibold text-slate-200 pb-8'>
            SDG records in 2021
          </div>
        </div>
        <div className='flex flex-col gap-3 items-center justify-center'>
          <img src="/certificate.png" width="85%" className='' style={{aspectRatio: 1/1}}/>
          <div className='text-xl font-semibold text-slate-200 pb-8'>
            SDG records in 2021
          </div>

        </div>
    </div>
   </div>
  )
}

export default Achivements