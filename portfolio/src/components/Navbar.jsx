import React, { useState } from 'react'
import {FaBars , FaTimes} from "react-icons/fa"

const Navbar = () => {
    const [nav,setNav] = useState(false)


    const links = [
        {
            id :1,
            link : "home"
        },
        {
            id :2,
            link : "about"
        },
        {
            id :3,
            link : "skills"
        },
        {
            id :4,
            link : "projects"
        },
        {
            id :5,
            link : "contact"
        },
        {
            id : 6,
            link : "resume"
        },{
            id:7,
            link:"portfolio"
        }
    ]


  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Revati</h1>
        </div>

        <ul className='hidden md:flex'>
           {
           links.map(({link , id}) => (
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-grey-500 hover:scale-110 duration-200'>{link}</li>
           ))
           }

        </ul>

        <div onClick={()=> setNav(!nav)} className="cursor-pointer pr-4 z-10 text-grey-500 md:hidden">
           {nav ? <FaTimes size={30}/> :  <FaBars size={30}/>}
        </div>


        {nav && (
               <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-grey-800 text-grey-500">

               {
                  links.map(({link , id}) => (
                       <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">{link}</li>
                  ))
                  }
       
               </ul>
        )}

        
        
    </div>
  )
}

export default Navbar