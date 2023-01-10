import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/revati-junghare-612346179/",
      style: "rounded-tr-md",
    },

    {
        id:2,
        child :(
            <>
            Github <FaGithub size={25}/>
            </>
        ),
        href : "https://github.com/RevatiJunghare"
    },
  ];

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
        </div>

        <div className="lg:flex flex-row">
          <div>
          <p>Contact Number - 9172539302</p>
          <p>Email Address - jungharerevati804@gmail.com</p>
          <p>Address - Amravati, Maharashtra</p>
          </div>




          <div className="lg:flex flex-row">
          <ul style={{marginLeft:"20px"}}>
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
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
    </div>
  );
};

export default Contact;
