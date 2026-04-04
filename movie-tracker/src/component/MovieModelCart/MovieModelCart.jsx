import React, { useState } from 'react';
import { toast } from 'react-toastify';

const MovieModelCart = ({ movie, carts, setCarts }) => {
    const [isWatchList, setIsWatchList] = useState(false)

    const handleSubScription = () => {
        const isFound = carts.find(item => item.id === movie.id)
        if (isFound) return
        setIsWatchList(true)
        setCarts([...carts, movie])

        toast.success("Added to WatchList! 🎬")
    }
    const tagColors = {
        "Popular": "bg-blue-100 text-blue-600",
        "Top Rated": "bg-yellow-100 text-yellow-600",
        "New": "bg-green-100 text-green-600"
    }

    return (
        <div
            key={movie.id}
            className=" shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
        >

            {/* 🔥 Image */}
            <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-64 object-cover"
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
                <p className="text-yellow-500 font-medium animate-pulse">
                    ⭐ {movie.rating}
                </p>

                {/* 🎯 Status + Duration */}
                <p className="text-sm text-gray-600">
                    {movie.status} • {movie.duration}
                </p>

                {/* 🎯 Tag */}
                <span className={`inline-block animate-pulse ${tagColors[movie.tag]} text-xs px-2 py-1 rounded-full`}>
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


                <button onClick={handleSubScription} className={`btn w-full text-white rounded-full ${isWatchList
                    ? "bg-linear-to-r from-[#340601] to-[#0029f3]"
                    : "bg-linear-to-r from-[#740303] to-[#f3002d]"
                    }`}>
                    {isWatchList ? "WatchList" : "Add to WatchList"}
                </button>

            </div>
        </div>
    );
};

export default MovieModelCart;