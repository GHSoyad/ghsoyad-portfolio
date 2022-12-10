import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className='min-h-screen py-8 md:py-16 flex flex-col gap-28'>
            <HeroBanner></HeroBanner>
            <Projects></Projects>
            <Skills></Skills>
        </div>
    );
};

export default Home;