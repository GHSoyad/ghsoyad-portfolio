import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../../Components/ProjectCard/ProjectCard';

const FeaturedProjects = () => {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('featuredProjects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <section id='projects' className='container mx-auto max-w-screen-xl px-4 xl:px-0 py-8'>
            <div className='divider w-full md:w-1/2 mx-auto before:bg-primary after:bg-primary before:h-0.5'>
                <h3 className='font-bold text-2xl md:text-4xl text-center pb-2'>Featured Projects</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-14'>
                {
                    projects.map(project => <ProjectCard key={project.title} project={project}></ProjectCard>)
                }
            </div>
            <Link to='/projects' className='btn btn-primary btn-wide flex mt-10 mx-auto'>See All Projects</Link>
        </section>
    );
};

export default FeaturedProjects;