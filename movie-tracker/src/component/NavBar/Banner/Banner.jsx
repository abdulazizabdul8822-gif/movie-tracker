import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../../assets/Movie (2).json';



const Banner = () => {
    return (
        <div className=" min-h-162.5 flex items-center overflow-hidden pt-6 lg:pt-0">
            <div className=" mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-10">
                {/* Left Content */}
                <div className=" space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <div className="inline-flex items-center gap-2 bg-[#c01805]/10 border border-[#2800f3]/30 text-[#c01805] text-sm font-medium px-5 py-2 rounded-full">
                        <span><img className=' animate-pulse' src="" alt="" /></span>🎬 New: Trending Movies & Series Added
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-[#c01805]">
                        Discover Your Next
                        <br />
                        <span className="bg-linear-to-r from-[#c01805] to-[#2800f3] bg-clip-text text-transparent">
                            Favorite Movie
                        </span>
                    </h1>

                    <p className="text-lg max-w-lg">
                        Explore thousands of movies and series. Add them to your watchlist and never miss a great film again.
                    </p>

                    <div className="flex flex-row gap-3 pt-4 justify-center items-center lg:justify-start">
                        <button className=" bg-linear-to-r from-[#c01805] to-[#2800f3] transition-all px-3 py-3 rounded-full font-semibold text-white">
                            Browse Movies
                        </button>
                        <button className=" bg-linear-to-r from-[#c01805] to-[#2800f3] bg-clip-text text-transparent flex gap-3 justify-center items-center btn btn-outline btn-primary px-3 py-6 rounded-full">
                            <span className="group-hover:translate-x-1 transition"><img src="" alt="" /></span>
                            View Trending


                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center lg:justify-end">
                    <div>
                        <Player
                            autoplay
                            loop
                            src={animationData}
                            style={{ height: '600px', width: '500px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;