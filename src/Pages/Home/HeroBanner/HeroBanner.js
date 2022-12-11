import React from 'react';
import image from '../../../Assets/images/devImage.png';

const HeroBanner = () => {
    return (
        <section id='about' className='container mx-auto max-w-screen-lg px-4 lg:px-0 py-8 md:flex items-center'>
            <div className='md:w-4/6 md:pr-20 flex flex-col gap-4 text-center md:text-justify'>
                <h1 className='font-bold text-3xl'>Hello, I am<br></br> Golam Hasnain Soyad</h1>
                <h3 className='font-bold text-4xl'>Frontend Developer</h3>
                <p className='text-lg text-justify'>I am a passionate Frontend developer always keen to explore and learn web technologies. I am a fast learner and capable of understanding problems and coming up with effective solutions. Self motivated to make eye catching and engaging system for user satisfaction.</p>
                <div className='flex gap-4 justify-center md:justify-start'>
                    <a href="https://drive.google.com/file/d/1LM1DQOnrHeOwWKLAsEsAEcpBWFIrk6ng/view?usp=share_link" target='_blank' rel='noreferrer' className='btn btn-primary btn-outline font-bold border-2'>View Resume</a>
                </div>
            </div>
            <div className='md:w-2/6 mt-12 md:mt-0'>
                <img src={image} alt="" className='mx-auto rounded-full border-none ring ring-primary' />
            </div>
        </section>
    );
};

export default HeroBanner;