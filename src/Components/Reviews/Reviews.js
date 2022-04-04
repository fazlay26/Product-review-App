import React from 'react';
import useReview from '../../Hooks/useReview';
import InsideReviews from '../InsideReviews/InsideReviews';

const Reviews = () => {
    const [reviews, setReviews] = useReview()
    return (
        <div>
            <h1 className='text-6xl text-center'>All Customer Reviews</h1>
            <div className=' py-5 flex justify-center mx-8'>
                <div className='grid grid-cols-3 gap-5 w-fit'>
                    {
                        reviews.map(review => <InsideReviews
                            InsideReviews
                            key={review.id}
                            review={review}
                        ></InsideReviews>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;