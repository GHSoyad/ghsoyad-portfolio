import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const projects = [
        { title: "Cadence Watches", description: "An online watch reselling shop", thumb: "https://i.ibb.co/YjRnXFh/cadence-watches-thumbnail.png", img: "https://i.ibb.co/424s2nr/cadence-watches.png", tech: "ReactJS, Tailwind CSS, daisy UI, NodeJS, ExpressJS, MongoDB, JWT, Stripe, Firebase, Vercel", live: "https://cadence-watches.web.app/" },
        { title: "Smiley Dental Services", description: "A dental service review website", thumb: "https://i.ibb.co/pfbjJZm/smiley-dental-services-thumbnail.png", img: "https://i.ibb.co/0CdY7fM/smiley-dental-services.png", tech: "ReactJS, Tailwind CSS, daisy UI, NodeJS, ExpressJS, MongoDB, JWT, Firebase, Vercel", live: "https://smiley-dental-services.web.app/" },
        { title: "Bright Fort", description: "A online learning platform", thumb: "https://i.ibb.co/tJ2dGtS/bright-fort-thumbnail.png", img: "https://i.ibb.co/PzVyDGt/bright-fort.png", tech: "ReactJS, Tailwind CSS, daisy UI, NodeJS, ExpressJS, Firebase, Vercel", live: "https://bright-fort.web.app/" }
    ]
    return (
        <div>
            <div className='container mx-auto max-w-screen-xl px-4 lg:px-0 my-8'>
                <div className='divider w-1/2 mx-auto before:bg-neutral-content after:bg-neutral-content'>
                    <h3 className='font-bold text-4xl text-center pb-2'>My Projects</h3>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
                    {
                        projects.map(project => <ProjectCard key={project.title} project={project}></ProjectCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;