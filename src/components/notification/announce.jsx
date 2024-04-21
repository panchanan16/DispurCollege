import CampaignIcon from '@mui/icons-material/Campaign';
import VerifiedIcon from '@mui/icons-material/Verified';


const AnnounceMent = () => {
    return (
        <div>
            <div className='border-2 bg-blue-950 rounded-xl p-3 shadow-lg'>
                <div className='flex items-center justify-center p-1 gap-5 border-2 rounded-lg border-blue-900'>
                    <CampaignIcon className='text-5xl text-white' />
                    <h3 className='text-2xl font-semibold text-white'>Announcements</h3>
                </div>
            </div>
            <div className='border-2 p-5 rounded-xl shadow-2xl'>
                <div className='flex flex-col gap-5 w-[25vw] h-[18rem] overflow-y-scroll p-3'>
                    <div className='flex gap-3'>
                        <VerifiedIcon className='text-green-500' />
                        <p className='max-w-[25vw]'>Lorem ipsum dolor sit consectetur adipisicing elit ok i will go.</p>
                    </div>
                    <div className='flex gap-3'>
                        <VerifiedIcon className='text-green-500' />
                        <p className='max-w-[25vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ut amet distinctio fugit.</p>
                    </div>
                    <div className='flex gap-3'>
                        <VerifiedIcon className='text-green-500' />
                        <p className='max-w-[25vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ut amet distinctio fugit, quisquam inventore quasi laudantium blanditiis dignissimos.</p>
                    </div>
                    <div className='flex gap-3'>
                        <VerifiedIcon className='text-green-500' />
                        <p className='max-w-[25vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ut amet distinctio fugit, quisquam inventore quasi laudantium blanditiis dignissimos.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnnounceMent