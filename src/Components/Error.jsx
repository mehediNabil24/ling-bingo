import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <p className='text-center '>Oops! Error <br />404 not found this page </p>

            <NavLink to={'/'} className={'btn btn-neutral'}>Back to Home Page</NavLink>
        </div>
    );
};

export default Error;