import React from 'react'
import { BsFillPersonLinesFill } from "react-icons/bs";

const About = () => {
  const links = [
    
    {
      id: 1,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "/Revati_Junghare_Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ]
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl mt-20">An enthusiastic , responsible  and self-motivated ,graduate looking for an entry-level position in web development where I can utilize the extensive knowledge .A problem-solving mindset and ability to perform well in collaboration.always an energetic and eager to learn new skills.I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative.</p>

            <br/>
           
           <div>
           <ul style={{marginLeft:"5px"}}>
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                download={download}
                className={
                  "flex justify-between items-center w-40 h-10 px-4  bg-blue-900 hover:rounded-md duration-300 hover:ml-[-10px]" +
                  " " +
                  style
                }>
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer">
                  {child}
                </a>
              </li>
            ))}
          </ul>
           </div>



        </div>
    </div>
  )
}

export default About