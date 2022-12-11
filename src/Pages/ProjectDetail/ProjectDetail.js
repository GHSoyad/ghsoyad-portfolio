import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaArrowRight, FaGit, FaGitAlt, FaGithub, FaGithubAlt, FaLink } from "react-icons/fa";

const ProjectDetail = () => {

    const project = useLoaderData();
    const { title, description, tech, img, features } = project;

    return (
        <section id='projects' className='container mx-auto max-w-screen-xl px-4 xl:px-0 py-8'>
            <div className='divider w-full md:w-1/2 mx-auto before:bg-primary after:bg-primary before:h-0.5'>
                <h3 className='font-bold text-3xl md:text-4xl text-center pb-2'>{title}</h3>
            </div>
            <div className='md:flex mt-10 md:mt-14 md:p-4 bg-[#ece6fa] rounded-lg'>
                <div className='w-full md:w-2/3 flex flex-col gap-2 p-4'>
                    <h1 className='text-3xl font-bold'>Project Name: {title}</h1>
                    <div className='flex gap-4 flex-wrap mb-4 text-lg'>
                        <a href="" target='_blank' rel='noreferrer' className="text-primary font-bold flex items-center gap-1 hover:underline"><span><FaLink></FaLink></span> Live Link</a>
                        <a href="" target='_blank' rel='noreferrer' className="text-primary font-bold flex items-center gap-1 hover:underline"><span><FaGithub></FaGithub></span> Client Repo</a>
                        <a href="" target='_blank' rel='noreferrer' className="text-primary font-bold flex items-center gap-1 hover:underline"><span><FaGithub></FaGithub></span> Server Repo</a>
                    </div>
                    <h3 className='text-lg'><span className='font-bold'>Description: </span>{description}</h3>
                    <p><span className='font-bold'>Technology: </span>{tech}</p>
                    <ul className='flex flex-col gap-2 mt-4'>
                        {features ?
                            features.map(feature => <li key={feature} className='flex items-center gap-2'><span className='text-primary w-4'><FaArrowRight></FaArrowRight></span> {feature}</li>) :
                            <li>Features not found.</li>
                        }
                    </ul>
                </div>
                <div className='w-full md:w-1/3 p-4 flex flex-col gap-4'>
                    <img src={img} alt="" className='max-h-[400px] object-cover object-top rounded' />
                    <div className='grid grid-cols-2 gap-4'>
                        <img src={img} alt="" className='max-h-44 w-full object-cover object-top rounded' />
                        <img src={img} alt="" className='max-h-44 w-full object-cover object-top rounded' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;