import React from 'react';
import './Portfolio.css';
import image1 from './images/image-1.png';
import image2 from './images/image-2.png';

const Portfolio = () => {
    return (
        <div id='main'>
            <section id="first-section">
                <div className="flex-row">
                    <div className="container">
                        <h1>Hello My Name is<span>Golam Hasnain Soyad</span></h1>
                        <h3>Fast learner and Problem solver</h3>
                        <p>I am a passionate front-end web developer with an experience in ReactJS. I am always keen to
                            explore and learn web technologies. I am a fast learner and I tend to pick upsomeone else's work faster and improve them. I am very
                            good at following instructions and focusing on small details. I work better under pressure.</p>
                        <a href="https://www.linkedin.com/in/golam-hasnain-soyad-5167b7227/" target="_blank" rel='noreferrer'>Hire me</a>
                    </div>
                    <div className="circle circle-small"></div>
                    <div className="circle circle-big"></div>
                    <div className="container">
                        <div className="rectangle"></div>
                        <img src={image1} alt="" />
                    </div>
                    <div className="circle circle-medium"></div>
                </div>
            </section>
            <hr className="hr-aqua"></hr>
            <section id="second-section">
                <div className="flex-row">
                    <div className="container">
                        <img src={image2} alt="" />
                    </div>
                    <div className="circle circle-small"></div>
                    <div className="circle circle-big"></div>
                    <div className="container">
                        <h1>Tech Stack</h1>
                        <h3>Things I am working with</h3>
                        <p>I have been working with HTML, CSS, Javascript and Bootstrap since 2021. Recently learned MERN stack development and built some projects. Now I am confident to build web apps using MERN stack.
                        </p>
                        <a href="https://drive.google.com/uc?export=download&id=1d2YKwjJi4tBKlcM0CQagABwxwH-0E6-u">Download Resume</a>
                    </div>
                    <div className="circle circle-medium"></div>
                </div>
            </section>
            <hr className="hr-yellow"></hr>
            <section id="third-section">
                <h1>Experiences</h1>
                <div className="flex-row">
                    <div className="container">
                        <h2>Web Development Intern</h2>
                        <h3>Incredible Hearts PLT - Remote <br></br>March 2022 - September 2022</h3>
                        <p>Designed and developed the company website. Maintained their online learning platform. Worked with team members to fix issues with the online learning platform. Maintained the company domains and domains hosting
                        </p>
                    </div>
                </div>
            </section>
            <hr className="hr-green"></hr>
            <footer>
                <h3>Follow me</h3>
                <ul className="footer-icons">
                    <li><a href="https://www.facebook.com/golam.sowad/" target="_blank" rel='noreferrer'><i
                        className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/gh_sowad/" target="_blank" rel='noreferrer'><i
                        className="fa-brands fa-instagram"></i></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/golam-hasnain-soyad-5167b7227/" target="_blank" rel='noreferrer'><i
                        className="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="https://github.com/GHSoyad" target="_blank" rel='noreferrer'><i className="fa-brands fa-github"></i></a></li>
                </ul>
                <p className="copyright">© 2022 <span className="green">Golam Hasnain Soyad</span><span className="hide"> | </span><span
                    className="block">All
                    Rights Reserved</span></p>
            </footer>
        </div>
    );
};

export default Portfolio;