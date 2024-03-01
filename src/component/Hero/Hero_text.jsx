import React from 'react'

function Hero_text() {
    return (
        <div className="w-[50%] py-[180px]">
            <h1 className='text-5xl font-bold text-green-500 py-[10px] text-left px-[40px]'>
                One Click Solution for your website
            </h1>
            <p className="text-xl py-[10px] text-left px-[40px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ipsum corrupti, a et vitae, iure porro ullam maiores debitis quia ab, nemo doloribus tempora quod! Dignissimos perferendis consectetur corporis laboriosam?</p>
            <div className="flex justify-start px-[40px] gap-[10px]">
            <button className="border border-3 rounded-[10px] bg-green-500 w-[100px] h-[50px] hover:bg-black hover:text-white gap-[20px]">View More</button>
            <button className="border border-green-500 text-green-300 rounded-[10px] w-[100px] h-[50px] hover:text-black hover:border-black">Watch Vedio</button>
            </div>
        </div>
    )
}

export default Hero_text
