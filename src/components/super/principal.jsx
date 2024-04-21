

const Principal = () => {
    return (
        <div>
            <div className='flex flex-col items-center gap-8'>
                <img src="/principal.png" alt="principal" width="500px" height="600px" />
                <div className='flex flex-col gap-10'>
                    <h2 className='text-2xl font-semibold'>Panchanan Deka</h2>
                    <p className='max-w-[600px] text-slate-500 text-[15px]'>
                        Dear Students,
                        I would like to take this opportunity to heartily invite each one of you, who desires to gain knowledge and be an asset to the society and the nation to the premises of Dispur College. The College named under the capital of Assam has produced many eminent figures and we are still in the journey to continue producing many more eminent personalities who can make the state and the nation proud. I am big man in this universe like Thanos 
                    </p>
                    <button className='border-2 bg-blue-900 p-3 text-white rounded-2xl shadow-xl w-[200px] font-semibold'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Principal