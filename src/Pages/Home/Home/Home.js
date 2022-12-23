import Lottie from 'lottie-react';
import React from 'react';
import Contact from '../Contact/Contact';
import HeroBanner from '../HeroBanner/HeroBanner';
import Skills from '../Skills/Skills';
import homeBGLottie from '../../../Assets/lottie/homeBG.json';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';

const Home = () => {

    return (
        <div className='relative'>
            <div className='fixed h-screen w-full'><Lottie animationData={JSON.parse(JSON.stringify(homeBGLottie))} loop={true}></Lottie></div>
            <div className='min-h-screen py-2 md:py-16 flex flex-col gap-10 md:gap-16 relative'>
                <HeroBanner></HeroBanner>
                <FeaturedProjects></FeaturedProjects>
                <Skills></Skills>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;