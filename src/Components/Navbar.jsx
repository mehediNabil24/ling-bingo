import React from 'react';
import logo from '../assets/lingo-bingo-high-resolution-logo.jpeg'
import { NavLink } from 'react-router-dom';
import { FaUserLarge } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center  '>
            <div>
                <img className='w-[60px] h-[60px] rounded-full' src={logo} alt="" />
            </div>
            <div className='space-x-5'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/start-learning'}>Start-Learning</NavLink>
                <NavLink to={'/tutorial'}>Tutorials</NavLink>
                <NavLink to={'/about-us'}>About-us</NavLink>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <FaUserLarge className='text-2xl'></FaUserLarge>
                <button className='btn btn-neutral'>Log in </button>

            </div>
            
        </div>
    );
};

export default Navbar;