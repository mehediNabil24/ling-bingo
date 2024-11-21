import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='text-center mt-3'>
            {
           user?<h1 className='text-2xl font-bold'>Hello,{user.displayName}</h1>:""
}
            
        </div>
    );
};

export default Header;