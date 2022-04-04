import React from 'react';

const Blogs = () => {
    return (
        <div className='flex flex-col items-center justify-center h-[80vh]'>
            <div className='border-2 border-orange-600 rounded-lg mx-5 p-5'>
                <h1 className='text-2xl'>
                    Q1:What is Context API
                </h1>
                <p className='text-2xl'>
                    ans:The Context API is a React structure that allows us to exchange details and avoid prop-drilling from all tiers of our component.Context API allows one to share state across the entire app .Context API is the alternative option of props drilling .we can pass the data to all the components by using createContext.
                </p>
            </div>
            <div className='border-2 border-orange-600 rounded-md mx-5 mt-10 p-5 '>
                <h1 className='text-2xl'>
                    Q2:What is a Semantic tag?
                </h1>
                <p className='text-2xl'> ans:A semantic tag is describes its meaning to both the browser and the developer .semantic is such a tag when we hear the tag name ,we understand the purpose of this tag for example :section,article,Header,footer is semantic tag and they clearly defines their content.
                </p>
            </div>
        </div>

    );
};

export default Blogs;