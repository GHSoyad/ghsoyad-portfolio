import React from 'react';
import image from '../../../Assets/images/devImage.png';

const HeroBanner = () => {
    return (
        <div>
            <div className='container mx-auto max-w-screen-lg px-4 lg:px-0 my-8 md:flex items-center'>
                <div className='md:w-4/6 md:pr-20 flex flex-col gap-4'>
                    <h1 className='font-bold text-3xl'>Hello, I am<br></br> Golam Hasnain Soyad</h1>
                    <h3 className='font-bold text-4xl'>Frontend Developer</h3>
                    <p className='text-lg text-justify'>I am a passionate Frontend developer always keen to explore and learn web technologies.
                        Looking to work for an organization where there will be enough opportunities to prove myself and
                        learn new skills while contributing to the organization.</p>
                    <div className='flex gap-4'>
                        <a href="https://drive.google.com/file/d/1LM1DQOnrHeOwWKLAsEsAEcpBWFIrk6ng/view?usp=share_link" target='_blank' rel='noreferrer' className='btn bg-base-300 hover:glass border-none'>View Resume</a>
                    </div>
                </div>
                <div className='md:w-2/6 mt-12 md:mt-0'>
                    <img src={image} alt="" className='mx-auto rounded-full border-none ring ring-primary ring-offset-base-100 ring-offset-2' />
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;