import React from 'react';
import { MdOutlineBookmark } from 'react-icons/md';

const Cart = ({ carts, setCarts }) => {

    const handleRemove = (removeItem) => {
        const filtered = carts.filter(c => c.id !== removeItem.id)
        setCarts(filtered)
    }

    const handleClearAll = () => {
        setCarts([])
    }

    return (
        <div className='container mx-auto px-4 py-10 mb-10'>

            {/* Header */}
            <div className='flex justify-between items-center mb-8'>
                <h2 className='font-bold text-3xl'>
                    🎬 My Watchlist
                    <span className='ml-2 text-lg text-gray-400'>({carts.length} movies)</span>
                </h2>
                {carts.length > 0 && (
                    <button
                        onClick={handleClearAll}
                        className='btn btn-outline btn-error rounded-full'>
                        Clear All
                    </button>
                )}
            </div>

            {/* Empty State */}
            {carts.length === 0 ? (
                <div className='flex flex-col items-center justify-center py-20 space-y-4'>
                    <MdOutlineBookmark className='text-9xl text-gray-200 animate-bounce' />
                    <p className='text-gray-400 text-xl'>Your watchlist is empty</p>
                    <p className='text-gray-300'>Add movies to watch later</p>
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {carts.map((movie) => (
                        <div key={movie.id} className='shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105'>

                            {/* Image */}
                            <img
                                src={movie.image}
                                alt={movie.title}
                                className='w-full h-48 object-cover'
                            />

                            {/* Content */}
                            <div className='p-4 space-y-2'>

                                <h2 className='text-lg font-semibold'>{movie.title}</h2>

                                <p className='text-sm text-gray-500'>
                                    {movie.genre} • {movie.year}
                                </p>

                                <p className='text-yellow-500 font-medium'>
                                    ⭐ {movie.rating}
                                </p>

                                <p className='text-sm text-gray-600'>
                                    {movie.status} • {movie.duration}
                                </p>

                                {/* Remove Button */}
                                <button
                                    onClick={() => handleRemove(movie)}
                                    className='mt-3 w-full btn btn-error text-white rounded-full'>
                                    Remove
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;