import Lottie from 'lottie-react';
import React from 'react';
import comingLottie from '../../Assets/lottie/comingSoon.json';

const Blogs = () => {
    return (
        <section id='contact' className='container mx-auto max-w-screen-xl px-4 xl:px-0 py-8'>
            <div className='divider w-full md:w-1/2 mx-auto before:bg-primary after:bg-primary before:h-0.5'>
                <h3 className='font-bold text-2xl md:text-4xl text-center pb-2'>Coming Soon</h3>
            </div>
            <div className='bg-primary-focus/10 rounded-lg mt-10 md:mt-14'>
                <div className='w-full sm:w-1/2 lg:w-1/3 mx-auto py-8 bg-[#ece6fa]'>
                    <Lottie animationData={JSON.parse(JSON.stringify(comingLottie))} loop={true} />
                </div>
            </div>
        </section>
    );
};

export default Blogs;