import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';

const HomePage = () => {
    const [reviews, setReviews] = useReview()
    const threeReview = reviews.slice(0, 3)
    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])
    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row  justify-end space-x-4 mt-10'>
                <div className='flex items-center w-full pl-20 justify-center '>
                    <div className=''>
                        <h1 className='text-7xl mb-2'>Apple Macbook Air</h1>
                        <h1 className='text-7xl '>Best Laptop in Market</h1>
                        <p className='text-gray-500 pt-4'>Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage.</p>
                        <button className='py-2 px-3 text-white mt-3 rounded-full bg-orange-500'>Live Demo</button>
                    </div>

                </div>

                <div className='flex w-full justify-center  md:order-1 '>
                    <img className='w-fit ' src="https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg?t=st=1649010450~exp=1649011050~hmac=8362c33b8f71b9538c08b858ad060ed07bde619b5c1c758892a28733358adf50&w=1380" alt="" />

                </div>
            </div>
            <div className='text-7xl text-center'>
                <h1>Customer Reviews</h1>
            </div>

            <div className=' py-5 flex justify-center mx-8'>
                <div className='grid md:grid-cols-3 gap-5 w-fit'>
                    {
                        threeReview.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)

                    }

                </div>
            </div>
            <div className='h-[20vh] text-center py-5'>
                <Link to={'/Reviews'} className='py-2 px-5 text-white mt-3 rounded-full bg-orange-500 '>See All Reviews</Link>
            </div>

        </div>

    );
};

export default HomePage;