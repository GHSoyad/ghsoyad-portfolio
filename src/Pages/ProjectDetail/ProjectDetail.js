import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaLink } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { MdZoomOutMap } from 'react-icons/md';

const ProjectDetail = () => {

    const project = useLoaderData();
    const { title, description, tech, img, images, features, live, client, server } = project;

    return (
        <section id='projects' className='container mx-auto max-w-screen-xl px-4 xl:px-0 py-8'>
            <div className='divider w-full md:w-1/2 mx-auto before:bg-primary after:bg-primary before:h-0.5'>
                <h3 className='font-bold text-2xl md:text-4xl text-center pb-2'>{title}</h3>
            </div>
            <div className='md:flex mt-10 md:mt-14 md:p-4 bg-[#ece6fa] rounded-lg'>
                <div className='w-full md:w-2/3 flex flex-col gap-2 p-4'>
                    <h1 className='text-2xl md:text-3xl font-bold'>Project Name: {title}</h1>
                    <div className='flex gap-4 flex-wrap mb-4 text-lg'>
                        <a href={live} target='_blank' rel='noreferrer' className="text-primary font-bold flex items-center gap-1 hover:underline"><span><FaLink></FaLink></span> Live Link</a>
                        <a href={client} target='_blank' rel='noreferrer' className="text-primary font-bold flex items-center gap-1 hover:underline"><span><FaGithub></FaGithub></span> Client Repo</a>
                        <a href={server} target='_blank' rel='noreferrer' className="text-primary font-bold flex items-center gap-1 hover:underline"><span><FaGithub></FaGithub></span> Server Repo</a>
                    </div>
                    <h3 className='text-lg'><span className='font-bold'>Description: </span>{description}</h3>
                    <p><span className='font-bold'>Technology: </span>{tech}</p>
                    <ul className='flex flex-col gap-2 mt-4'>
                        {features ?
                            features.map(feature => <li key={feature} className='flex gap-2'><span className='text-primary w-4 pt-1'><FaArrowRight></FaArrowRight></span> {feature}</li>) :
                            <li>Features not found.</li>
                        }
                    </ul>
                </div>
                <PhotoProvider maskOpacity={0.9}>
                    <div className='w-full md:w-1/3 p-4 flex flex-col gap-4'>
                        <div className='relative group cursor-pointer'>
                            <PhotoView src={img}>
                                <div className='absolute inset-0 bg-primary/20 hidden group-hover:flex justify-center items-center text-2xl'><span className='text-white bg-primary p-2 rounded'><MdZoomOutMap></MdZoomOutMap></span></div>
                            </PhotoView>
                            <img src={img} alt="" className='w-full max-h-[200px] md:max-h-[400px] object-cover object-top rounded-md shadow hover:shadow-lg' />
                        </div>
                        <div className='grid grid-cols-2 gap-4 max-h-32'>
                            {
                                images.map((image, i) =>
                                    <PhotoView key={i} src={image}>
                                        <img src={image} alt="" className='w-full h-full object-cover object-top rounded-md shadow hover:shadow-lg cursor-pointer' />
                                    </PhotoView>
                                )
                            }
                        </div>
                    </div>
                </PhotoProvider>
            </div>
        </section>
    );
};

export default ProjectDetail;