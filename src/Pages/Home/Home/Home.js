import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div className='min-h-screen py-8 md:py-16 flex flex-col gap-28'>
            <HeroBanner></HeroBanner>
            <Projects></Projects>
        </div>
    );
};

export default Home;