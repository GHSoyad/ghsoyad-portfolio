import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../../Components/Loader/Loader';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://ghsoyad-portfolio-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                return setProjects(data);
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <section id='projects' className='container mx-auto max-w-screen-xl px-4 xl:px-0 py-8'>
            <div className='divider w-full md:w-1/2 mx-auto before:bg-primary after:bg-primary before:h-0.5'>
                <h3 className='font-bold text-2xl md:text-4xl text-center pb-2'>My Projects</h3>
            </div>

            {
                loading ? <Loader>Loading Projects...</Loader> :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-14'>
                        {
                            projects.map(project => <ProjectCard key={project._id} project={project}></ProjectCard>)
                        }
                    </div>
            }
        </section>
    );
};

export default Projects;