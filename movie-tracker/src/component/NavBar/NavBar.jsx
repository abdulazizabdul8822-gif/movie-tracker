import React from 'react';
import { BiSolidCameraMovie, } from 'react-icons/bi';
import cameLogo from '../../assets/Grey Orange Minimalist Film Production Logo.png'


const NavBar = ({ search, setSearch }) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost font-bold text-2xl md:text-4xl"><BiSolidCameraMovie /><span className='block font-bold text-2xl md:text-4xl bg-linear-to-r from-[#c01805] to-[#2800f3] bg-clip-text text-transparent mr-4 py-4'>CineTrack</span></a>
                </div>
                <div className="flex gap-2">
                    <input type="text" placeholder="Search" value={search}
                        onChange={(e) => setSearch(e.target.value)} className="input input-bordered w-24 md:w-auto" />
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-50 rounded-full">
                                <img
                                    alt=""
                                    src={cameLogo} />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
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