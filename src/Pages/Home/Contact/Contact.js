import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast';
import animation from '../../../Assets/lottie/MnttK5CWi5.json';
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
        <div>
            <div className='container mx-auto max-w-screen-lg px-4 lg:px-0 my-8'>
                <div className='divider w-1/2 mx-auto before:bg-primary after:bg-primary before:h-0.5'>
                    <h3 className='font-bold text-4xl text-center pb-2'>Contact Me</h3>
                </div>
                <div>
                    <div className='flex justify-center items-center'>
                        <div className='w-full md:w-1/2 relative'>
                            <div className='w-full mx-auto p-8 rounded-lg md:rounded-r-none'>
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
                        <div className='hidden md:block w-1/2'>
                            <Lottie animationData={animation} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;