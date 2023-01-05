import React from 'react'
import Passport from "../assets/passport.jpeg"
import  {MdArrowRightAlt} from "react-icons/md"

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-grey-800 via-black">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>
                <p className="text-grey-500 py-4 max-w-md text-white">An independent and self-motivated graduate looking for an entry-level position in web development where I can utilize the extensive knowledge .A problem-solving mindset and ability to perform well in collaboration.</p>
                <div>
                    <button className=" text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group">
                       Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                        
                        <MdArrowRightAlt className="ml-1"/>
                        </span>
                        
                    </button>
                </div>
            </div>

            <div>
                <img src={Passport} alt="passport" className="rounded-2xl mx-auto w-2/3 md:w-2/3"/>
            </div>
        </div>
    </div>
  )
}

export default Home