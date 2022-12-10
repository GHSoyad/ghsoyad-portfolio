import React from 'react';
import Contact from '../Contact/Contact';
import HeroBanner from '../HeroBanner/HeroBanner';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className='min-h-screen py-8 md:py-16 flex flex-col gap-28'>
            <HeroBanner></HeroBanner>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;