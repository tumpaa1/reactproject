import React from 'react'

function Servicebody({ icon, tittle, des }) {
    return (
        <div className=" w-[45%] bg-white rounded-lg ">
            <div className="w-full flex justify-center">
                <img className="h-[70px] rounded-full bg-green-400 hover:bg-green-500 cursor-pointer item-center my-[15px] p-[5px]"
                    src={icon} />
            </div>
            <h1 className="text-2xl text-green-500 font-bold py-[15px] text-center">{tittle}</h1>
            <p className="text-xl text-center px-[10px]">{des}</p>
            <button className="my-[20px] text-white border border-3 rounded-[10px] bg-green-500 w-[100px] h-[50px] hover:bg-black hover:text-white">View More</button>
        </div>
    )
}

export default Servicebody
