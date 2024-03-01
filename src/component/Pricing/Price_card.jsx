import React from 'react'

function Price_card({plan,cost,but,des}) {
    return (
        <div className="w-[25%] border border-green-900 border-2 rounded-lg bg-white">
          <h1 className="text-green-700 py-[20px] text-xl mr-0">{plan}</h1> 
          <h2 className="text-4xl text-green-700 font-bold">{cost}</h2>
          <button className="my-[20px] text-white border rounded-[10px] bg-green-700 w-[150px] h-[50px] hover:bg-black hover:text-white">{but}</button>
          <p className="py-[10px] pb-10">{des}</p>

        </div>
    )
}

export default Price_card
