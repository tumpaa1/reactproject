import React from 'react'
import Card from './Card'
import p1 from '../../Assets/p1.png'

function Main_card() {
    return (
        <div className="w-full flex justify-center gap-[10px] mx-[10px]  py-[15px]">
                <Card
                im={p1}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolore?"
                name="abc"
                skill="Web Developer"
                />
                <Card
                im={p1.png}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolore?"
                name="abc"
                skill="Web Developer"
                />
                <Card
                im={p1.png}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolore?"
                name="abc"
                skill="Web Developer"
                />
                <Card 
                im={p1.png}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolore?"
                name="abc"
                skill="Web Developer"
                />

            
        </div>
    )
}
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolore?</p>

export default Main_card
