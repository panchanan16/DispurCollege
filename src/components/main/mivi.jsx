import React from 'react'
import Vision from '../m-vison/vision'
import Mission from '../m-vison/mission'


const Mivi = () => {
    return (
        <>
            <div className='flex flex-col items-center w-full justify-start h-auto gap-10'>
                <div className='text-4xl font-bold '>
                    Our Mission, Vission, CoreValue
                </div>
                <div className='h-full w-full relative'>
                    <div className='bg-blue-900 h-full w-[15rem] absolute left-0 -z-10'>
                    </div>
                    <div className='flex items-center gap-10 ml-[8rem] mt-20 text-sm z-20 max-w-[80vw]'>
                        <div className='bg-yellow-300 border-8 border-white w-[20rem] aspect-square p-8 rounded-full'>
                            <div className='border-4 border-yellow-500 rounded-full flex items-center justify-center p-8'>
                                <svg className='w-[3rem] aspect-square' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="rocket"><path fill="#FFFFFF" d="M22.601 2.062a1 1 0 0 0-.713-.713A11.252 11.252 0 0 0 10.47 4.972L9.354 6.296 6.75 5.668a2.777 2.777 0 0 0-3.387 1.357l-2.2 3.9a1 1 0 0 0 .661 1.469l3.073.659a13.42 13.42 0 0 0-.555 2.434 1 1 0 0 0 .284.836l3.1 3.1a1 1 0 0 0 .708.293c.028 0 .057-.001.086-.004a12.169 12.169 0 0 0 2.492-.49l.644 3.004a1 1 0 0 0 1.469.661l3.905-2.202a3.035 3.035 0 0 0 1.375-3.304l-.668-2.76 1.237-1.137A11.204 11.204 0 0 0 22.6 2.062ZM3.572 10.723l1.556-2.76a.826.826 0 0 1 1.07-.375l1.718.416-.65.772a13.095 13.095 0 0 0-1.59 2.398Zm12.47 8.222-2.715 1.532-.43-2.005a11.34 11.34 0 0 0 2.414-1.62l.743-.683.404 1.664a1.041 1.041 0 0 1-.416 1.112Zm1.615-6.965-3.685 3.386a9.773 9.773 0 0 1-5.17 2.304l-2.405-2.404a10.932 10.932 0 0 1 2.401-5.206l1.679-1.993a.964.964 0 0 0 .078-.092L11.99 6.27a9.278 9.278 0 0 1 8.81-3.12 9.218 9.218 0 0 1-3.143 8.829Zm-.923-6.164a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5Z"></path></svg>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-2xl font-semibold'>Our Mission</h2>
                            <p className='text-slate-600'>
                                Dispur College aspires to be a nationally acclaimed Higher Educational Institution. It is our persistent endeavour to remain resolute and unwavering in the pursuit of knowledge aligned with the motto of the institution “Tamso Ma Jyotirgamaya(तमसोमाज्योतिर्गमय)” and positively contribute towards holistic education which focus on nurturing student’s talent and personal development; promoting intellectual growth; developing professional skills; fostering gender equity and stimulating employability and to prepare them to work for holistic development of the society and the nation.
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center gap-10 ml-[8rem] mt-20 text-sm z-20 max-w-[80vw]'>
                        <div className='bg-violet-400 border-8 border-white w-[20rem] aspect-square p-7 rounded-full'>
                            <div className='border-4 border-violet-500 rounded-full flex items-center justify-center p-8'>
                                <svg className='w-[3rem] aspect-square ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="eye"><path fill="#FFFFFF" d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"></path></svg>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-2xl font-semibold'>Our Vision</h2>
                            <p className='text-slate-600'>
                                Dispur College aspires to be a nationally acclaimed Higher Educational Institution. It is our persistent endeavour to remain resolute and unwavering in the pursuit of knowledge aligned with the motto of the institution “Tamso Ma Jyotirgamaya(तमसोमाज्योतिर्गमय)” and positively contribute towards holistic education which focus on nurturing student’s talent and personal development; promoting intellectual growth; developing professional skills; fostering gender equity and stimulating employability and to prepare them to work for holistic development of the society and the nation.
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center gap-10 ml-[8rem] mt-8 text-sm z-20 max-w-[80vw]'>
                        <div className='bg-red-300 border-8 border-white w-[20rem] aspect-square p-8 rounded-full'>
                            <div className='border-4 border-red-400 rounded-full flex items-center justify-center p-8'>
                                <svg className='w-[3rem] aspect-square ' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="fire"><path fill="#FFFFFF" d="m8.468 8.395-.002.001-.003.002Zm9.954-.187a1.237 1.237 0 0 0-.23-.175 1 1 0 0 0-1.4.411 5.782 5.782 0 0 1-1.398 1.778 8.664 8.664 0 0 0 .134-1.51 8.714 8.714 0 0 0-4.4-7.582 1 1 0 0 0-1.492.806 7.017 7.017 0 0 1-2.471 4.942l-.23.187a8.513 8.513 0 0 0-1.988 1.863 8.983 8.983 0 0 0 3.656 13.908 1 1 0 0 0 1.377-.926 1.05 1.05 0 0 0-.05-.312 6.977 6.977 0 0 1-.19-2.581 9.004 9.004 0 0 0 4.313 4.016.997.997 0 0 0 .715.038 8.995 8.995 0 0 0 3.654-14.863Zm-3.905 12.831a6.964 6.964 0 0 1-3.577-4.402 8.908 8.908 0 0 1-.18-.964 1 1 0 0 0-.799-.845.982.982 0 0 0-.191-.018 1 1 0 0 0-.867.5 8.959 8.959 0 0 0-1.205 4.718 6.985 6.985 0 0 1-1.176-9.868 6.555 6.555 0 0 1 1.562-1.458.745.745 0 0 0 .075-.055s.296-.245.306-.25a8.968 8.968 0 0 0 2.9-4.633 6.736 6.736 0 0 1 1.385 8.088 1 1 0 0 0 1.184 1.418 7.856 7.856 0 0 0 3.862-2.688 7 7 0 0 1-3.279 10.457Z"></path></svg>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-2xl font-semibold'>Our core</h2>
                            <p className='text-slate-600'>
                                <ol type="a" className='flex flex-col gap-2'>
                                    <li>1. Integrity: Acting in accordance with the highest academic, professional and ethical standards is a priority for one and all representing the educational institution.</li>
                                    <li>2. Responsibility: We are aware that our moves influence the world around us and based on that apprehension, we make the conscious choice to take actions to improve our community and the lives of each and everyone around us.</li>
                                    <li>3. Diversity and Inclusion: The institution respects and appreciates differences in socio-economic background, education, ethnicity, colour, gender, age, caste, race, religion, physical abilities etc. among individuals. We share an environment where everyone has equal opportunity to contribute ideas.</li>
                                    <li>4. Excellence: We strive for excellence in all our endeavors as individuals, as an institution, and as a leader in higher education.</li>
                                    <li>5. Teamwork: We understand that team values allow us to perform our roles effectively and contribute to Institution's success.</li>
                                    <li>6. Transparency: We believe in accessibility, compliance, communication and accountability.</li>
                                    <li>7. Environmental Sustainability: We value adopting practices for minimising our impact on the environment to the benefit of a more sustainable future for posterity.</li>
                                </ol>
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Mivi