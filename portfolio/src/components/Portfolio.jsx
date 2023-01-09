import React from 'react'
import sugar from "../assets/sugar.jpg"
import licious2 from "../assets/licious2.jpg"
import sopping2 from "../assets/sopping2.png"
import html from "../assets/html.png"
import css from "../assets/css.jpg"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"

const Portfolio = () => {



  return (<>
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
               <p className="py-6">Check out some of my work right here</p>
            </div>
            

            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 w-3/3">
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img src={sugar} alt="" className="rounded-md duration-200 hover:scale-105"/>
                <div className="flex items-center justify-center">
                    <a href="https://effortless-sunflower-25458d.netlify.app/"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button></a>
                    <a href="https://github.com/RevatiJunghare/holistic-slip-8772"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button></a>
                </div>
               </div>

               <div className="shadow-md">
                 <h1 className='text-4xl font-bold inline border-b-4 border-gray-500 ml-5'>Sugar Cosmetics</h1>
                 <p className='py-6 items-center justify-center'>SUGAR Cosmetics is a cruelty-free makeup brand that is high on style and higher on performance. The brand is inspired by and targeted towards bold, independent women who refuse to be stereotyped into roles</p>
                 <div className='grid sm:grid-cols-3 md:grid-cols-3 gap-8 mt-9'>
                   <img src={html} className="w-1/2"/>
                   <img src={css} className="w-1/2"/>
                   <img src={javascript} className="w-1/2"/>
                 </div>
               </div>
            </div>
     </div>
</div>










<div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            {/* <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
               <p className="py-6">Check out some of my work right here</p>
            </div> */}
            

            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 w-3/3">
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img src={licious2} alt="" className="rounded-md duration-200 hover:scale-105"/>
                <div className="flex items-center justify-center">
                    <a href="https://zesty-sherbet-4c14b4.netlify.app/"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button></a>
                    <a href="https://github.com/RevatiJunghare/ludicrous-teeth-6192/tree/main/frito"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button></a>
                </div>
               </div>

               <div className="shadow-md">
                 <h1 className='text-4xl font-bold inline border-b-4 border-gray-500 ml-5'>Licious</h1>
                 <p className='py-6 items-center justify-center'>Licious is your one-stop fresh meat delivery shop. In here, you get nothing but the freshest meat & seafood, delivered straight to your doorstep.</p>
                 <div className='grid sm:grid-cols-4 md:grid-cols-4 gap-2 mt-12'>
                   <img src={html} className="w-1/2"/>
                   <img src={css} className="w-1/2"/>
                   <img src={javascript} className="w-1/2"/>
                   <img src={react} className="w-1/2"/>
                 </div>
               </div>
            </div>
     </div>
</div>






<div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            {/* <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
               <p className="py-6">Check out some of my work right here</p>
            </div> */}
            

            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 w-3/3">
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img src={sopping2} alt="" className="rounded-md duration-200 hover:scale-105"/>
                <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                </div>
               </div>

               <div className="shadow-md">
                 <h1 className='text-4xl font-bold inline border-b-4 border-gray-500 ml-5'>Shopping App</h1>
                 <p className='py-6 items-center justify-center'>It is Online Shopping App where you can search any product , filter by category and rating and add to cart.</p>
                 <div className='grid sm:grid-cols-4 md:grid-cols-4 gap-2 mt-12'>
                   <img src={html} className="w-1/2"/>
                   <img src={css} className="w-1/2"/>
                   <img src={javascript} className="w-1/2"/>
                   <img src={react} className="w-1/2"/>
                 </div>
               </div>
            </div>
     </div>
</div>

</>
  )
}

export default Portfolio