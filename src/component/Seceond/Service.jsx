import React from 'react'
import Servicebody from './Servicebody'

function Service() {
    return (
        <div className="w-[50%] flex flex-wrap gap-3 py-[15px]">
            <Servicebody 
            icon="data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27utf-8%27?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width=%27800px%27%20height=%27800px%27%20viewBox=%270%200%2024%2024%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath%20d=%27M9%204H6C4.89543%204%204%204.89543%204%206V14C4%2015.1046%204.89543%2016%206%2016H18C19.1046%2016%2020%2015.1046%2020%2014V12%27%20stroke=%27%23000000%27%20stroke-width=%272%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27/%3e%3cpath%20d=%27M15%204L13%206L15%208%27%20stroke=%27%23000000%27%20stroke-width=%272%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27/%3e%3cpath%20d=%27M19%204L21%206L19%208%27%20stroke=%27%23000000%27%20stroke-width=%272%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27/%3e%3cpath%20d=%27M12%2016V20%27%20stroke=%27%23000000%27%20stroke-width=%272%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27/%3e%3cpath%20d=%27M8%2020H16%27%20stroke=%27%23000000%27%20stroke-width=%272%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27/%3e%3c/svg%3e"
            tittle="SSL Certificate"
            des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nesciunt magni aut, commodi labore laborum dolorum officiis mollitia fugit dolorem?"
            />
            <Servicebody />
            <Servicebody />
            <Servicebody />
        </div>
    )
}

export default Service
