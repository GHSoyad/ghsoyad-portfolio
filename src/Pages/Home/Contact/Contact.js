import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast';
import contactLottie from '../../../Assets/lottie/contact.json';
import Lottie from "lottie-react";


const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_emailServiceId, process.env.REACT_APP_emailTemplateId, form.current, process.env.REACT_APP_emailPublicKey)
            .then((result) => {
                if (result.status === 200) {
                    toast.success('Message Sent!');
                    e.target.reset();
                }
            }, (error) => {
                toast.error(error.text);
            });
    };

    return (
        <section id='contact' className='container mx-auto max-w-screen-xl px-4 xl:px-0 py-8'>
            <div className='divider w-full md:w-1/2 mx-auto before:bg-primary after:bg-primary before:h-0.5'>
                <h3 className='font-bold text-2xl md:text-4xl text-center pb-2'>Contact Me</h3>
            </div>
            <div className='bg-primary-focus/10 rounded-lg'>
                <div className='md:flex justify-center items-center max-w-screen-lg mx-auto mt-10 md:mt-14'>
                    <div className='w-full md:w-1/2 relative'>
                        <div className='w-full mx-auto p-4 md:p-8 rounded-lg md:rounded-r-none'>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-control w-full mb-2">
                                    <label className="label font-bold">
                                        <span className='label-text'>Your Name</span>
                                    </label>
                                    <input type="text" name='user_name' placeholder="Name" className="input input-bordered input-primary" required />
                                </div>
                                <div className="form-control w-full mb-2">
                                    <label className="label font-bold">
                                        <span className='label-text'>Your Email</span>
                                    </label>
                                    <input type="email" name='user_email' placeholder="Email" className="input input-bordered input-primary" required />
                                </div>
                                <div className="form-control w-full mb-2">
                                    <label className="label font-bold">
                                        <span className='label-text'>Your Message</span>
                                    </label>
                                    <textarea className="textarea textarea-primary" name='message' placeholder="Message" required></textarea>
                                </div>
                                <button type='submit' className='btn btn-primary w-full mt-6'>Send</button>
                            </form>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 bg-[#ece6fa]'>
                        <Lottie animationData={JSON.parse(JSON.stringify(contactLottie))} loop={true} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;