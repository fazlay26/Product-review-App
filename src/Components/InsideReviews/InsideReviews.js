import React from 'react';

const InsideReviews = (props) => {
    const { name, review, ratings, img } = props.review
    return (
        <div data-aos="zoom-in-down" className='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <img className='w-3/12' src={img} alt="" />
            <h1 className='text-2xl pb-3'>{name}</h1>
            <p className='text-1xl pb-3'>{review}</p>
            <p className='text-1xl pb-3'>Ratings:<span>{ratings}</span></p>

        </div>
    );
};

export default InsideReviews;