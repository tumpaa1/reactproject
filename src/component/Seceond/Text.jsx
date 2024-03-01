import React from 'react'

function Text() {
    return (
        <div className="w-[50%] py-[150px]">
          <h1 className='text-5xl text-left px-[40px] font-bold text-green-500'>
                Hosting Solution With Benefits.
            </h1>
            <p className="text-lg text-left px-[10px] py-[10px] px-[40px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ipsum corrupti, a et vitae, iure porro ullam maiores debitis quia ab, nemo doloribus tempora quod! Dignissimos perferendis consectetur corporis laboriosam?</p>
            <div className="flex justify-start px-[40px]">
                <button className="text-white text-xl border border-3 rounded-[10px] bg-green-600 w-[150px] h-[50px] hover:bg-black hover:text-white mr-[30px]">Read More</button>
            </div>
        </div>
    )
}

export default Text
