import React from 'react'

function Card({im, des, name, skill}) {
    return (
        <div className="w-[20%] bg-gray-200 rounded-lg py-10 px-4">
              <div className="flex justify-center">
              <img className=" rounded-full w-[160px]"
                    src={im} />
              </div>
            <p className="text-center py-[40px]">
                {des}
            </p>
            <h1 className="text-xl text-green-500 font-bold text-center">{name}</h1>
            <p className="text-center py-[10px] mb-[10px]"> {skill} </p>
        </div >
    )
}

export default Card
