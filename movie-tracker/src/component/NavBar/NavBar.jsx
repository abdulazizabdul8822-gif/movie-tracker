import React, { useState } from 'react';
import { BiSolidCameraMovie } from 'react-icons/bi';
import { MdHistory } from 'react-icons/md';
import cameLogo from '../../assets/Grey Orange Minimalist Film Production Logo.png'

const NavBar = ({ search, setSearch, movies }) => {

    const [searchHistory, setSearchHistory] = useState([])
    const [showDropdown, setShowDropdown] = useState(false)

    // টাইপ করলে movie নাম থেকে suggestion
    const suggestions = movies.filter(movie =>
        search.length > 0 &&
        movie.title.toLowerCase().startsWith(search.toLowerCase())
    ).slice(0, 5)

    // Enter চাপলে history তে save হবে
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && search.trim() !== "") {
            if (!searchHistory.includes(search)) {
                setSearchHistory([search, ...searchHistory].slice(0, 5))
            }
            setShowDropdown(false)
        }
    }

    // History item click
    const handleHistoryClick = (item) => {
        setSearch(item)
        setShowDropdown(false)
    }

    // History delete
    const handleDeleteHistory = (item) => {
        setSearchHistory(searchHistory.filter(h => h !== item))
    }

    return (
        <div className="sticky top-0 z-50">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost font-bold text-2xl md:text-4xl">
                        <BiSolidCameraMovie className=' animate-pulse'/>
                        <span className='block font-bold text-2xl md:text-4xl bg-linear-to-r from-[#c01805] to-[#2800f3] bg-clip-text text-transparent mr-4 py-4'>
                            CineTrack
                        </span>
                    </a>
                </div>

                <div className="flex gap-2 items-center">

                    {/* Search Input + Dropdown */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search movies..."
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                                setShowDropdown(true)
                            }}
                            onKeyDown={handleKeyDown}
                            onFocus={() => setShowDropdown(true)}
                            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                            className="input input-bordered w-24 md:w-64"
                        />

                        {/* Dropdown */}
                        {showDropdown && (suggestions.length > 0 || searchHistory.length > 0) && (
                            <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-xl z-50 overflow-hidden border border-gray-100">

                                {/* Live Suggestions */}
                                {suggestions.length > 0 && (
                                    <>
                                        
                                        {suggestions.map((movie) => (
                                            <div
                                                key={movie.id}
                                                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer"
                                                onClick={() => {
                                                    setSearch(movie.title)
                                                    setShowDropdown(false)
                                                }}>
                                                <img src={movie.image} className="w-8 h-8 rounded object-cover" />
                                                <div>
                                                    <p className="text-sm font-medium">{movie.title}</p>
                                                    <p className="text-xs text-gray-400">{movie.genre} • {movie.year}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}

                                {/* Recent Searches — search খালি থাকলে দেখাবে */}
                                {searchHistory.length > 0 && search.length === 0 && (
                                    <>
                                        <p className="text-xs text-gray-400 px-4 pt-2 pb-1">🕐 Recent Searches</p>
                                        {searchHistory.map((item, index) => (
                                            <div key={index} className="flex items-center justify-between px-4 py-2 hover:bg-gray-50">
                                                <div
                                                    className="flex items-center gap-2 flex-1 cursor-pointer"
                                                    onClick={() => handleHistoryClick(item)}>
                                                    <MdHistory className="text-gray-400" />
                                                    <span className="text-sm text-gray-600">{item}</span>
                                                </div>
                                                <button
                                                    onClick={() => handleDeleteHistory(item)}
                                                    className="text-gray-300 hover:text-red-500 text-xs ml-2">
                                                    ✕
                                                </button>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Avatar */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img className=' animate-spin' alt="" src={cameLogo} />
                            </div>
                        </div>
                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                            <li><a className="justify-between">Profile<span className="badge">New</span></a></li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;