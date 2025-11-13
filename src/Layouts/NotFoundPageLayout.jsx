import React from 'react';
import { Link } from 'react-router';

const NotFoundPageLayout = () => {
    return (
        <div>
            <figure className='flex items-center justify-center'>
                <img src="https://i.postimg.cc/NMHWkNfY/404-1.png" alt="404 image" />
            </figure>
            <div className='flex flex-col items-center justify-center gap-3 mt-7'>
                <p className='text-[#565872] text-xl font-semibold'>Opps! Page Not Found</p>
                <Link className='my_btn' to={'/'}>BACK TO HOME</Link>
            </div>
        </div>
    );
};

export default NotFoundPageLayout;