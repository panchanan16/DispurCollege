import FiberNewIcon from '@mui/icons-material/FiberNew';
import './scroll.css'


const TopScroll = () => {
    return (
        <div className='w-full flex h-[5rem] bg-[#f6f6f6] items-center justify-center'>
            <div className='update-slide flex gap-5'>
                <div className='flex gap-2 text-sm text-slate-600'>
                    <FiberNewIcon className='text-red-700' />
                    <p className='w-fit'>B A, Bcom, final examination</p>
                </div>
                <div className='flex gap-2 text-sm text-slate-600 items-center'>
                    <FiberNewIcon className='text-red-700' />
                    B A, Bcom, final examination
                </div>
                <div className='flex gap-2 text-sm text-slate-600 items-center'>
                    <FiberNewIcon className='text-red-700' />
                    B A, Bcom, final examination
                </div>
                <div className='flex gap-2 text-sm text-slate-600 items-center'>
                    <FiberNewIcon className='text-red-700' />
                    B A, Bcom, final examination
                </div>
                <div className='flex gap-2 text-sm text-slate-600 items-center'>
                    <FiberNewIcon className='text-red-700' />
                    B A, Bcom, final examination
                </div>
                <div className='flex gap-2 text-sm text-slate-600 items-center'>
                    <FiberNewIcon className='text-red-700' />
                    B A, Bcom, final examination
                </div>
            </div>
        </div>
    )
}

export default TopScroll