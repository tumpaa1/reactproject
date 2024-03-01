import React from 'react'
import Price_card from './Price_card'

function Price_cardMain() {
    return (
        <div className="flex gap-[60px] mx-[10px] justify-center py-[15px]">
            <Price_card 
            plan="Starter Plan"
            cost="Free"
            but="Proceed Free"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, doloribus?"
             />
            <Price_card 
            plan="Yearly Plan"
            cost="$8/month"
            but="Proceed Anually"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, doloribus?"
            />
            <Price_card 
            plan="Monthly Plan"
            cost="$12/month"
            but="Proceed Monthly"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, doloribus?"
            />
        </div>
    )
}

export default Price_cardMain
