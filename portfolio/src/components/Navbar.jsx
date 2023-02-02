import React, { useState } from 'react'
import {FaBars , FaTimes} from "react-icons/fa"
import {Link} from 'react-scroll'

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
            id :6,
            link : "Resume",
            download: true,
            href:"/Revati_Junghare_Resume.pdf"
        },
        
        
    ]


  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-2'><Link to="/Home" smooth duration={500}>Revati</Link></h1>
        </div>

        <ul className='hidden md:flex'>
           {
           links.map(({link , id ,href,download}) => (
                <li key={id} download={download} className='px-4 cursor-pointer capitalize font-medium text-grey-500 hover:scale-110 duration-200'><Link to={link} href={href} download={download}   smooth duration={500}>{link}</Link></li>
           ))
           }

        </ul>

        <div onClick={()=> setNav(!nav)} className="cursor-pointer pr-4 z-10 text-grey-500 md:hidden">
           {nav ? <FaTimes size={30} /> :  <FaBars size={30}/>}
        </div>


        {nav && (
               <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-grey-800 text-grey-500">

               {
                  links.map(({link , id , download ,href}) => (
                       <li key={id} download={download}  className="px-4 cursor-pointer capitalize py-6 text-4xl"><Link to={link} href={href} download={download}  smooth duration={500}>{link}</Link></li>
                  ))
                  }
       
               </ul>
        )}

        
        
    </div>
  )
}

export default Navbar