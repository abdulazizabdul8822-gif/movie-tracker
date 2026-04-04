import React from 'react';
import { FaCheck } from 'react-icons/fa';


const Simple = () => {
    return (
        <div>
            <div className='py-20 px-4 md:px-0'>
                <div className='flex flex-col justify-center items-center space-y-3 py-10 '>
                    <h1 className='font-bold text-2xl md:text-4xl text-center bg-linear-to-r from-[#c01805] to-[#2800f3] bg-clip-text text-transparent '>🔥 Trending This Week</h1>
                    <p className='text-gray-500 text-center'>Most watched movies and series this week.</p>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto items-stretch '>


                    <div className='border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                        <h2 className='font-bold text-2xl'>Inception</h2>
                        <p className='text-gray-500'>A mind-bending thriller</p>

                        <p>⭐ 8.8 • 2010 • 2h 28min</p>
                        <p>🎬 Cast: Leonardo DiCaprio, Joseph Gordon</p>
                        <p>🎭 Genre: Sci-Fi</p>






                        <button className=' btn mt-4 w-full py-3 rounded-full bg-linear-to-r from-[#c01805] to-[#2800f3] text-white font-semibold'>
                            Add to WatchList
                        </button>
                    </div>


                    <div className='relative bg-linear-to-r from-[#c01805] to-[#2800f3] rounded-2xl p-8 flex flex-col gap-4 text-white shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg'>


                        <span className='absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-800 text-sm font-semibold px-4 py-1 rounded-full'>
                            🔥 Trending
                        </span>

                        <h2 className='font-bold text-2xl'>Oppenheimer</h2>
                        <p className='text-purple-200'>The story of the atomic bomb</p>


                        <p>⭐ 8.9 • 2023 • 3h 1min</p>
                        <p>🎬 Cast: Cillian Murphy, Emily Blunt</p>
                        <p>🎭 Genre: Drama</p>


                        <button className=' btn mt-4 w-full py-3 rounded-full bg-white text-red-700 font-semibold'>
                            Add to WatchList
                        </button>
                    </div>


                    <div className='border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                        <h2 className='font-bold text-2xl'>Breaking Bad</h2>
                        <p className='text-gray-500'>A chemistry teacher gone wrong</p>


                        <p>⭐ 9.5 • 2008 • 5 Seasons</p>
                        <p>🎬 Cast: Bryan Cranston, Aaron Paul</p>
                        <p>🎭 Genre: Crime</p>


                        <button className=' btn mt-4 w-full py-3 rounded-full bg-linear-to-r from-[#c01805] to-[#2800f3] text-white font-semibold'>
                             Add to WatchList
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Simple;