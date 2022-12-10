import React from 'react';

const ProjectCard = ({ project }) => {

    const { title, description, thumb, tech, live } = project

    return (
        <div className="card card-compact transition-opacity bg-base-200 shadow-md shadow-neutral-content/50 hover:shadow-lg hover:shadow-neutral-content/70">
            <figure><img src={thumb} alt={title} className='w-full max-h-60 object-cover object-top' /></figure>
            <div className="card-body gap-4">
                <h2 className='text-2xl font-medium'>{title}</h2>
                <p className='text-lg'>{description}</p>
                <p><span className='font-bold'>Technology: </span>{tech}</p>
                <div className="flex gap-4">
                    <button className="inline-block rounded px-6 py-3 text-sm font-medium bg-base-300 hover:glass border-none">View Details</button>
                    <a href={live} className="inline-block rounded px-6 py-3 text-sm font-medium bg-base-300 hover:glass border-none">Live Site</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;