import './pf.css'

function Plasticfree() {
    return (
        <div className='flex w-full h-screen bg-gradient-to-r from-[#0A0346] from-40% to-[#e0ebf3] -mt-20 gap-[20rem] items-baseline shadow-xl'>
            <div className='flex justify-center items-baseline mt-10 w-[50vw] h-full relative'>
                <div className='mt-10 flex gap-3 items-center justify-center'>
                    <h2 className='text-3xl font-bold text-white'>Environment-Freindly Culture</h2>
                    <img src='/env-quote.png' alt='location' width='120' height='80' style={{aspectRatio : 4/3}} />
                </div>
                <div>
                    <ul class="main-nav">
                        <li class="item1">
                            <div class="bg"></div>
                        </li>
                        <li class="item2">
                            <div class="bg"></div>
                        </li>
                        <li class="item3">
                            <div class="bg"></div>
                        </li>
                        <li class="item4">
                            <div class="bg"></div>
                        </li>
                        <li class="item5">
                            <div class="bg"></div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-[4rem] -ml-20'>
                <div className='flex items-center justify-center'>
                    <h2 className='text-3xl font-bold text-white'>Our Location</h2>
                    <img src='/location.png' alt='location' width='80' height='80' />
                </div>
                <div className='border-2 border-blue-700 p-3 rounded-xl'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14325.913576305993!2d91.784269!3d26.148545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5922a0100723%3A0x48c22d59955cd557!2sDispur%20College!5e0!3m2!1sen!2sin!4v1713709756226!5m2!1sen!2sin" width="300" height="300" className='rounded-xl'></iframe>
                </div>
            </div>
        </div>
    )
}

export default Plasticfree