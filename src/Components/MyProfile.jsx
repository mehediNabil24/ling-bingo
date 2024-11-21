import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { NavLink } from 'react-router-dom';

const MyProfile = () => {
    const {user} =useContext(AuthContext);
    return (
        <div className='w-11/12 mx-auto space-y-4 flex flex-col items-center'>
            <h1 className='text-center font-semibold'>Hey {user.displayName}, <br /> Welcome to our profile page</h1>

            <img className='w-[400px]' src={user.photoURL} alt="" />
            
                <p className='font-bold'> {user.displayName}</p>
                <p className='font-semibold'>{user.email}</p>

                <NavLink to={'/profileUpdate'} className='btn bg-blue-950 text-white'>Update Your Profile</NavLink>
            

            
        </div>
    );
};

export default MyProfile;