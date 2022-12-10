import Lottie from 'lottie-react';
import React from 'react';
import Contact from '../Contact/Contact';
import HeroBanner from '../HeroBanner/HeroBanner';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import animation from '../../../Assets/lottie/Pre-comp.json';

const Home = () => {
    return (
        <div className='relative'>
            <div className='absolute inset-0'><Lottie animationData={animation} loop={true}></Lottie></div>
            <div className='min-h-screen py-2 md:py-16 flex flex-col gap-10 md:gap-20 relative'>
                <HeroBanner></HeroBanner>
                <Projects></Projects>
                <Skills></Skills>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;