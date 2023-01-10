import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const Calender = () => {
  return (
    <div name="calender"
    className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Github Calender</p>
        </div>

        <div>
         <GitHubCalendar username="revatijunghare" />
        </div>
      </div>
    </div>
  )
}

export default Calender