import React from 'react';

const Filter = () => {

    const genres = [
        { name: "All", icon: "🎬" },
        { name: "Movie", icon: "🎥" },
        { name: "Series", icon: "📺" },
        { name: "Action", icon: "💥" },
        { name: "Sci-Fi", icon: "🚀" },
        { name: "Crime", icon: "🕵️" },
        { name: "Drama", icon: "🎭" },
        { name: "Animation", icon: "✨" },
        { name: "Fantasy", icon: "⚔️" },
        { name: "Thriller", icon: "😱" },
    ];

    return (
        <div className='px-4 md:px-0 mb-10 mt-5'>
            <div className='flex flex-col items-center space-y-6 container mx-auto'>

                {/* Heading */}
                <h2 className='font-bold text-2xl md:text-3xl bg-linear-to-r from-[#c01805] to-[#2800f3] bg-clip-text text-transparent'>Browse by Category</h2>

                {/* Buttons */}
                <div className='flex flex-wrap justify-center gap-3'>
                    {genres.map((genre, index) => (
                        <button
                            key={index}
                            className='px-5 py-2 rounded-full font-semibold border border-gray-300 text-gray-600 hover:bg-linear-to-r hover:from-[#c01805] hover:to-[#2800f3] hover:text-white hover:border-transparent transition-all duration-300 hover:scale-105'>
                            {genre.icon} {genre.name}
                        </button>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Filter;