import React from 'react';

const ProjectCard = ({ project }) => {

    const { title, description, thumb, tech, live } = project

    return (
        <div className="card card-compact transition-opacity bg-primary-focus/10 shadow-md hover:shadow-xl">
            <figure><img src={thumb} alt={title} className='w-full max-h-60 object-cover object-top' /></figure>
            <div className="card-body gap-4 bg-[#ece6fa]">
                <h2 className='text-2xl font-medium'>{title}</h2>
                <p className='text-lg'>{description}</p>
                <p><span className='font-bold'>Technology: </span>{tech}</p>
                <div className="flex gap-4">
                    <button className="inline-block rounded px-6 py-3 text-sm text-white font-bold bg-primary hover:bg-primary-focus">View Details</button>
                    <a href={live} target='_blank' rel='noreferrer' className="inline-block rounded px-6 py-3 text-sm text-primary font-bold bg-white border-2 border-primary hover:bg-primary hover:text-white">Live Site</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;