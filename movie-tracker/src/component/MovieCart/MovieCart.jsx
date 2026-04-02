import React, { use } from 'react';

const MovieCart = ({ MovieCartPromise }) => {

    // 🔥 Promise থেকে data নিয়ে আসছি (Suspense handle করবে)
    const movieCarts = use(MovieCartPromise)

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            {/* 🔥 Section Title */}
            <h2 className="text-3xl font-bold text-center mb-10">
                🎬 All Movies & Series
            </h2>

            {/* 🔥 Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {
                    movieCarts.map(movie => (

                        // 🔥 Single Card
                        <div
                            key={movie.id}
                            className=" shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
                        >

                            {/* 🔥 Image */}
                            <img
                                src={movie.image}
                                alt={movie.title}
                                className="w-full h-48 object-cover"
                            />

                            {/* 🔥 Content */}
                            <div className="p-4 space-y-2">

                                {/* 🎯 Title */}
                                <h2 className="text-lg font-semibold">
                                    {movie.title}
                                </h2>

                                {/* 🎯 Genre + Year */}
                                <p className="text-sm text-gray-500">
                                    {movie.genre} • {movie.year}
                                </p>

                                {/* 🎯 Rating */}
                                <p className="text-yellow-500 font-medium">
                                    ⭐ {movie.rating}
                                </p>

                                {/* 🎯 Status + Duration */}
                                <p className="text-sm text-gray-600">
                                    {movie.status} • {movie.duration}
                                </p>

                                {/* 🎯 Tag */}
                                <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                                    {movie.tag}
                                </span>

                                {/* 🎯 Description */}
                                <p className="text-sm text-gray-500 line-clamp-2">
                                    {movie.description}
                                </p>

                                {/* 🎯 Cast */}
                                <p className="text-xs text-gray-400">
                                    Cast: {movie.cast.join(", ")}
                                </p>

                                {/* 🎯 Button */}
                                <button className="mt-3 w-full bg-linear-to-r from-[#c01805] to-[#2800f3] text-white py-2 rounded-lg hover:bg-[#c01805] transition">
                                    View Details
                                </button>

                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default MovieCart;