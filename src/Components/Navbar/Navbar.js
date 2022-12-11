import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuLinks = <>
        <li><NavLink to='/'>About</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
        <li><NavLink to='/skills'>Skills</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>

    return (
        <nav className="bg-white/90 z-50 sticky top-0">
            <div className="navbar justify-between container mx-auto max-w-screen-lg font-semibold text-primary sticky top-0">
                <Link to='/' className="max-w-[200px] mr-4"><img src='' alt="" className='w-full rounded' /></Link>
                <div className='flex gap-1'>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact bg-white/90 dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            {menuLinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuLinks}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;