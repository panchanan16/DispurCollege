import AnnounceMent from '../notification/announce';
import StNotification from '../notification/st-notification';
import Tenders from '../notification/tenders';


const Notification = () => {
    return (
        <div className='w-full h-screen mt-20'>
            <div className='flex flex-col items-center justify-center gap-10'>
                <div>
                    <h2 className='text-4xl font-bold'>Notifications</h2>
                </div>
                <div className='flex gap-10'>
                   <StNotification />
                   <Tenders />
                   <AnnounceMent />
                </div>
            </div>
        </div>
    )
}

export default Notification;