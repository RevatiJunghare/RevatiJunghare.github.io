import React from 'react'

const Statistics = () => {
  return (
    <div style={{color:"white",display:'flex',alignItems:'center',justifyContent:"center"}}>

        <div  >
         <div>
               <p className="text-4xl font-bold inline border-b-4 border-gray-500" style={{fontSize:"40px"}} >Github Statistics</p>
               <p className="py-6">Check out some of my work right here</p>
            </div>

            <div >
        <p style={{marginTop:"40px"}}>
           {/* <img style={{justifyContent:"center",alignItems:"center",marginLeft:"150px"}} src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=RevatiJunghare&theme=solarized_dark"/> */}
           <div className='revati'> 
             
             <img src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=RevatiJunghare&theme=solarized_dark"/>
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