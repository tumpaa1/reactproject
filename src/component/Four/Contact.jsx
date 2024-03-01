import React from 'react'
import Contact_element from './Contact_element'
import Input from './Input'

function Contact() {
    return (
        <div className=" absolute flex w-[50%] h-[50vh] bg-white rounded-lg">
          <div>
              <Contact_element />
          </div>
          <div>
            <Input />
            </div>  
        </div>
    )
}

export default Contact
