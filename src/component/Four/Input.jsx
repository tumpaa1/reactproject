import React from 'react'

function Input() {
  return (
    <div className="w-full">
      <div className="py-[65px]">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Name "
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 border border-green-500 border-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 border border-green-500 border-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Enter text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 border border-green-500 border-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <button
            className="bg-green-500 hover:bg-black w-full text-white text-md py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
        </button>
        </div>
      </div>
    </div>


  )
}

export default Input
