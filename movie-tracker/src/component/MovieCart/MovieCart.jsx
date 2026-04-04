import React, { use, } from 'react';
import MovieModelCart from '../MovieModelCart/MovieModelCart';

const MovieCart = ({ MovieCartPromise, carts, setCarts, search }) => {

    
    const movieCarts = use(MovieCartPromise)
    const filtered = movieCarts.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    )

    

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            {/* 🔥 Section Title */}
            <h2 className="text-3xl font-bold text-center mb-10">
                <span className=' animate-ping'>🎬</span> All Movies & Series
            </h2>

            {/* 🔥 Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {
                    filtered.map(movie => (

                        // 🔥 Single Card
                        <MovieModelCart key={movie.id} movie={movie} carts={carts} setCarts={setCarts}/>
                    ))
                }

            </div>
        </div>
    );
};

export default MovieCart;