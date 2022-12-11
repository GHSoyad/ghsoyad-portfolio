import React from 'react';

const Skills = () => {

    const skills = [
        { name: 'HTML 5', image: 'https://i.ibb.co/qdMFc7x/html-5.png' },
        { name: 'CSS 3', image: 'https://i.ibb.co/rcSmNzY/css-3.png' },
        { name: 'Javascript', image: 'https://i.ibb.co/7YSPQnp/js.png' },
        { name: 'Bootstrap', image: 'https://i.ibb.co/KbgMnZN/bootstrap.png' },
        { name: 'Tailwind CSS', image: 'https://i.ibb.co/HDDhwQH/tailwind.png' },
        { name: 'React JS', image: 'https://i.ibb.co/d4MJ9rY/react.png' },
        { name: 'Node JS', image: 'https://i.ibb.co/vzFYXvG/node-js.png' },
        { name: 'Express JS', image: 'https://i.ibb.co/4W45zt9/express.png' },
        { name: 'MongoDB', image: 'https://i.ibb.co/wJh2sBp/mongodb.png' },
        { name: 'JWT', image: 'https://i.ibb.co/zSTjrgf/json-web-token-64.png' },
        { name: 'Github', image: 'https://i.ibb.co/Qc65m0V/github.png' },
        { name: 'Firebase', image: 'https://i.ibb.co/FKCZQ0r/firebase.png' },
        { name: 'Netlify', image: 'https://i.ibb.co/d0n4342/netlify.png' },
        { name: 'Vercel', image: 'https://i.ibb.co/1rf8BsS/vercel-logo.png' },
    ]

    return (
        <section id='skills' className='container mx-auto max-w-screen-xl px-4 xl:px-0 py-8'>
            <div className='divider w-full md:w-1/2 mx-auto before:bg-primary after:bg-primary before:h-0.5'>
                <h3 className='font-bold text-3xl md:text-4xl text-center pb-2'>My Skills</h3>
            </div>
            <div className='flex gap-5 cursor-default flex-wrap justify-center text-xl font-bold mt-10 md:mt-16'>
                {
                    skills.map(skill => (
                        <div key={skill.name} className='flex flex-auto items-center justify-center gap-2 px-4 py-2 rounded max-w-xs border-2 bg-white/90 border-primary shadow-md hover:shadow-xl'>
                            <img src={skill.image} alt="" className='w-10' />
                            <p>{skill.name}</p>
                        </div>
                    ))
                }

            </div>
        </section>
    );
};

export default Skills;