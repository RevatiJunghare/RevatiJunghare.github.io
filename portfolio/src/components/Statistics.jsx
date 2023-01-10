import React from 'react'

const Statistics = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen" style={{height:"160vh"}}>

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
         <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 border-gray-500">Github Statistics</p>
               <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className="w-full h-120vh bg-gradient-to-b from-gray-800 to-black text-white ">
        <p style={{marginTop:"40px"}}>
           {/* <img style={{justifyContent:"center",alignItems:"center",marginLeft:"150px"}} src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=RevatiJunghare&theme=solarized_dark"/> */}
           <div className="grid sm:grid-cols-1 md:grid-cols-2  mt-12" style={{justifyContent:"center",alignItems:"center",marginLeft:"120px"}}> 
             <img src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=RevatiJunghare&theme=solarized_dark"/>
             <img src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=RevatiJunghare&theme=solarized_dark"/>
           </div>

           <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-12"  style={{justifyContent:"center",alignItems:"center",marginLeft:"120px",marginBottom:"20px"}}>
             <img src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=RevatiJunghare&theme=solarized_dark"/>
             <img src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=RevatiJunghare&theme=solarized_dark&utcOffset=8"/>
           </div>
           
	
         </p>
    </div>
        </div>




    
</div>
  )
}

export default Statistics