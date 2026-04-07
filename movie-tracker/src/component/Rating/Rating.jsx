import React from 'react';

const Rating = () => {
    return (
        <div>
            <div className=' px-4 md:px-0 mb-5 mt-20 h-32 md:h-50 w-full bg-linear-to-r from-[#c01805] to-[#2800f3]  flex items-center'>
               <div className=' flex fle justify-around w-full text-center text-white'>
                 <div className=' space-y-4'>
                    <h1 className=' font-bold text-2xl md:text-5xl'>🎬 10,000+</h1>
                    <p>Movies & Series</p>
                </div>
                <div className=' space-y-4'>
                    <h1 className=' font-bold text-2xl md:text-5xl'>⭐ 4.8</h1>
                    <p >User Rating</p>
                </div>
                <div className=' space-y-4'>
                    <h1 className=' font-bold text-2xl md:text-5xl'>🎥 500+</h1>
                    <p>New This Month</p>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Rating;