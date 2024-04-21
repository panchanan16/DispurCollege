import '@/components/main/css/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div className='relative w-full h-[40rem] bg-blue-950 mt-[8rem]'>
            <div className='clip'></div>

            <div className='mt-[10rem] flex items-center justify-evenly'>
                <div className='flex flex-col gap-5'>
                    <h4 className='text-md font-medium text-blue-500'>Resources</h4>
                    <ul className='text-white flex flex-col gap-2'>
                        <li>Student Verification</li>
                        <li>Holiday List</li>
                        <li>College Magazine</li>
                        <li>College Prospectus</li>
                        <li>Gallery</li>
                        <li>Document Gallery</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-5'>
                    <h4 className='text-md font-medium text-blue-500'>Resources</h4>
                    <ul className='text-white flex flex-col gap-2'>
                        <li>Student Verification</li>
                        <li>Holiday List</li>
                        <li>College Magazine</li>
                        <li>College Prospectus</li>
                        <li>Gallery</li>
                        <li>Document Gallery</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-5'>
                    <h4 className='text-md font-medium text-blue-500'>Resources</h4>
                    <ul className='text-white flex flex-col gap-2'>
                        <li>Student Verification</li>
                        <li>Holiday List</li>
                        <li>College Magazine</li>
                        <li>College Prospectus</li>
                        <li>Gallery</li>
                        <li>Document Gallery</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center justify-center gap-3 mt-20'>
                <div className='flex gap-2 text-white text-sm items-center'>
                   <FacebookIcon className='text-white' />
                   facebook  
                </div>
                <div className='flex gap-2 text-white text-sm items-center'>
                   <InstagramIcon className='text-white' />
                   Instagram  
                </div>
                <div className='flex gap-2 text-white text-sm items-center'>
                   <YouTubeIcon className='text-white' />
                   YouTube  
                </div>
            </div>

            <div className='flex items-center justify-center gap-3 mt-20'>
                <h4 className='text-sm text-white'>Developed by - <span className='font-semibold'>Students of dispur college with</span> ❤️</h4>
            </div>
        </div>
    )
}

export default Footer