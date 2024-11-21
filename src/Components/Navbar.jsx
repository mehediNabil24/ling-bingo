import React, { useContext } from 'react';
import logo from '../assets/lingo-bingo-high-resolution-logo.jpeg'
import { NavLink } from 'react-router-dom';
import { FaUserLarge } from "react-icons/fa6";
import { AuthContext } from './AuthProvider';

const Navbar = () => {
    const {user,logOut} =useContext(AuthContext);
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
            <div>
                {
                    user?.email? <div>
                        <p>{user.displayName}</p>
                        <img src={user.photoURL} alt="" />
                    </div>:<FaUserLarge className='text-2xl'></FaUserLarge>
                }
            </div>

            <div>
            {
                user?( <button onClick={logOut} className ='btn btn-neutral'>Log out</button>):  (<NavLink to={'/login'} className='btn btn-neutral'>Log in </NavLink>)
            }
            

            </div>

          
                
               

            </div>
            </div>
            
        
    );
    
    
};

export default Navbar;