import React from 'react'
import sugar from "../assets/sugar.jpg"
import licious2 from "../assets/licious2.jpg"
import sopping2 from "../assets/sopping2.png"
import farfetch from "../assets/farfetch.jpg"
import snapdeal_rev from "../assets/snapdeal_rev.png"
const Portfolio = () => {



  return (<>
    <div name="projects" id="Projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"  >
            <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
               <p className="py-6">Check out some of my work right here</p>
            </div>
            

            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 w-3/3 " >
              <div className="shadow-md shadow-blue-600 rounded-lg hover:scale-105 duration-500" >
                <img src={sugar} alt="" className="rounded-md duration-200 " style={{width:"480px",height:"250px",padding:"20px"}}/>

                <div className="shadow-md">
                 <h1 className='text-xl font-bold inline border-b-2 border-gray-500 ml-5'>Marceline (Sugar Cosmetics Clone)</h1>
                 <p className='py-3 px-5 items-center justify-center'>SUGAR Cosmetics is a cruelty-free makeup brand that is high on style and higher on performance. The brand is inspired by and targeted towards bold, independent women who refuse to be stereotyped into roles</p>
                 <h1 className='text-xl font-bold inline border-b-2 border-gray-500 ml-5'>Tech Stacks</h1>
                 <p className='py-2 px-5 items-center justify-center'>Html | Css | Javascript</p>
               </div>

                <div className="flex items-center justify-center" >
                    <a href="https://effortless-sunflower-25458d.netlify.app/"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button></a>
                    <a href="https://github.com/RevatiJunghare/holistic-slip-8772"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button></a>
                </div>
               </div>


               <div className="shadow-md shadow-blue-600 rounded-lg hover:scale-105 duration-500" >
                <img src={licious2} alt="" className="rounded-md duration-200 " style={{width:"480px",height:"250px",padding:"20px"}}/>

                <div className="shadow-md">
                 <h1 className='text-xl font-bold inline border-b-2 border-gray-500 ml-5'>Frito (Licious Clone)</h1>
                 <p className='py-3 px-5 items-center justify-center'>Licious is your one-stop fresh meat delivery shop. In here, you get nothing but the freshest meat & seafood, delivered straight to your doorstep.it operates a farm-to-fork model and delivers more than 18,000 orders daily.</p>
                 <h1 className='text-xl font-bold inline border-b-2 border-gray-500 ml-5'>Tech Stacks</h1>
                 <p className='py-2 px-5 items-center justify-center'>Html | Css | Javascript | Reacts.js | Chakra UI</p>
               </div>

                <div className="flex items-center justify-center">
                    <a href="https://zesty-sherbet-4c14b4.netlify.app/"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button></a>
                    <a href="https://github.com/RevatiJunghare/ludicrous-teeth-6192/tree/main/frito"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button></a>
                </div>
               </div>
              </div>
            </div>
</div>



<div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"  >
 
  <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 w-3/3 " >
              <div className="shadow-md shadow-blue-600 rounded-lg hover:scale-105 duration-500" style={{marginTop:"90px"}}>
                <img src={farfetch} alt="" className="rounded-md duration-200 " style={{width:"480px",height:"250px",padding:"20px"}}/>

                <div className="shadow-md">
                 <h1 className='text-xl font-bold inline border-b-2 border-gray-500 ml-5'>Farfetch (Farfetch Clone)</h1>
                 <p className='py-3 px-5 items-center justify-center'>Farfetch is an online luxury fashion marketplace.It works together with brands and boutiques to sell their products on its platform.Farfetch makes money from in-store and online sales and income from the wholesale products.</p>
                 <h1 className='text-xl font-bold inline border-b-2 border-gray-500 ml-5'>Tech Stacks</h1>
                 <p className='py-2 px-5 items-center justify-center'>Html | Css | Javascript</p>
               </div>

                <div className="flex items-center justify-center">
                    <a href="https://dazzling-dolphin-8d2110.netlify.app/"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button></a>
                    <a href="https://github.com/priyanshupawar/-animated-governor-4742"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button></a>
                </div>
               </div>





               <div className="shadow-md shadow-blue-600 rounded-lg hover:scale-105 duration-500 " style={{marginTop:"90px"}}>
                <img src={snapdeal_rev} alt="" className="rounded-md duration-200 " style={{width:"480px",height:"250px",padding:"20px"}}/>

                <div className="shadow-md">
                 <h1 className='text-xl font-bold inline border-b-2 border-gray-500 ml-5'>Fashionista (Snapdeal Clone)</h1>
                 <p className='py-3 px-5 items-center justify-center'>Snapdeal was one of the largest online marketplaces in India. Snapdeal targets the value e-commerce segment, which Bahl estimated to be three times larger than the branded goods market.</p>
                 <h1 className='text-xl font-bold inline border-b-2 border-gray-500 ml-5'>Tech Stacks</h1>
                 <p className='py-2 px-5 items-center justify-center'>Html | Css | Javascript | React | Redux | Chakra UI</p>
               </div>

                <div className="flex items-center justify-center">
                    <a href="https://darling-mooncake-57603b.netlify.app/"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button></a>
                    <a href="https://github.com/fahad9988/warm-afternoon-3310/tree/master/warm-afternoon-3310"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button></a>
                </div>
               </div>

               </div>
    
</div>
</div>
</>
  )
}

export default Portfolio