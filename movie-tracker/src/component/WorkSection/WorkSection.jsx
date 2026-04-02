import React from 'react';
import user from '../../assets2/Grey Orange Minimalist Film Production Logo.png'
import packageImg from '../../assets2/Black Grey Minimalist Modern Cinema Logo.png'
import rocket from '../../assets2/M041T0609 Camera logo (Man) 21Sep25.png'
const Steps = () => {
    return (
        <div>
            <div className='bg-[#F1F1F1] py-20 px-4 md:px-0 '>
                <div className=' flex flex-col justify-center items-center space-y-3 py-10 text-center'>
                    <h1 className=' font-bold text-4xl'>"How It Works"</h1>
                    <p className=' text-gray-500'>Search & filter movies you like</p>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto '>
                    <div className=' transition-transform duration-300 hover:scale-102 relative bg-[#FFFFFF] flex flex-col items-center justify-between p-10 space-y-5 rounded-md '>
                        <span className='absolute top-3 right-4 bg-linear-to-r from-[#2e13f6] to-[#8c03f5] rounded-full text-white h-8 w-8 flex items-center justify-center'>01</span>
                        <img className=' w-100 rounded-full' src={user} alt="" />
                        <h2 className=' font-semibold text-xl'>🔍 Browse  </h2>
                        <p className=' text-gray-500'>
                            Search & filter Mark as watched</p>
                    </div>
                    <div className=' transition-transform duration-300 hover:scale-102 relative bg-[#FFFFFF] flex flex-col items-center justify-between p-10 rounded-md'>
                        <span className='absolute top-3 right-4 bg-linear-to-r from-[#2e13f6] to-[#8c03f5] rounded-full text-white h-8 w-8 flex items-center justify-center'>02</span>
                        <img className=' w-100 rounded-full' src={packageImg} alt="" />
                        <h2 className=' font-semibold text-xl'>❤️ Watchlist</h2>
                        <p className=' text-gray-500'>Save movies to watch later .</p>
                    </div>
                    <div className=' relative bg-[#FFFFFF] flex flex-col items-center justify-between p-10 rounded-md transition-transform duration-300 hover:scale-102'>
                        <span className='absolute top-3 right-4 bg-linear-to-r from-[#2e13f6] to-[#8c03f5] rounded-full text-white h-8 w-8 flex items-center justify-center'>03</span>
                        <img src={rocket}alt="" />
                        <h2 className=' font-semibold text-xl'>✅ Track</h2>
                        <p className=' text-gray-500'>movies you like when done</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;