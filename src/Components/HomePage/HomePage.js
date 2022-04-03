import React from 'react';

const HomePage = () => {
    return (
        <div className='flex justify-end space-x-4 mt-10'>
            <div className='flex items-center w-full pl-20 justify-center'>
                <div className=' '>
                    <h1 className='text-7xl mb-2'>Apple Macbook Air</h1>
                    <h1 className='text-7xl '>Best Laptop in Market</h1>
                    <p className='text-gray-500 pt-4'>Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage.</p>
                    <button className='py-2 px-3 text-white mt-3 rounded-full bg-orange-500'>Live Demo</button>
                </div>

            </div>

            <div className='flex w-full justify-center'>
                <img className='w-fit ' src="https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg?t=st=1649010450~exp=1649011050~hmac=8362c33b8f71b9538c08b858ad060ed07bde619b5c1c758892a28733358adf50&w=1380" alt="" />

            </div>
        </div>
    );
};

export default HomePage;