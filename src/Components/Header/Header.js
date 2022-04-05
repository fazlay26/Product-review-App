import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <div className=' z-10 sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link className='font-sans font-bold text-xl text-gray-600' to={'/'}> Tech Review</Link>
            </div>
            <div className='flex gap-4 text-xl'>
                <CustomLink to={'/Homepage'}>Home</CustomLink>
                <CustomLink to={'/Reviews'}>Reviews</CustomLink>
                <CustomLink to={'/DashBoard'}>DashBoard</CustomLink>
                <CustomLink to={'/Blogs'}>Blogs</CustomLink>
                <CustomLink to={'/About'}>About</CustomLink>

            </div>

        </div>
    );
};

export default Header;