import React from 'react';

const Cta = () => {
    return (
        <div className='h-60 flex items-center justify-center bg-linear-to-r from-[#c01805] to-[#2800f3]'>
    <div className='text-center text-white space-y-4'>
        <h2 className='font-bold text-3xl'>Ready to Track Your Movies?</h2>
        <p>Join thousands of movie lovers on CineTrack</p>
        <button className='px-8 py-3 rounded-full bg-white text-red-600 font-semibold'>
            Browse Movies
        </button>
    </div>
</div>

    );
};

export default Cta;