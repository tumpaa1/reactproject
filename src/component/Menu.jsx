import React from 'react'

function Menu() {
    return (
        <div>
            <ul className="text-white flex gap-[15px] mx-[20px]">
                <li className="hover:border border-green-500 px-[5px] py-[5px] rounded-sm hover:bg-green-400">Home</li>
                <li className="hover:border border-green-500 px-[5px] py-[5px] rounded-sm hover:bg-green-400">Services</li>
                <li className="hover:border border-green-500 px-[5px] py-[5px] rounded-sm hover:bg-green-400">Testimonials</li>
                <li className="hover:border border-green-500 px-[5px] py-[5px] rounded-sm hover:bg-green-400">Pricing</li>
                <li className="hover:border border-green-500 px-[5px] py-[5px] rounded-sm hover:bg-green-400">Contact </li>
            </ul>
        </div>
    )
}

export default Menu
