import React from 'react'

export default function HomePage() {
  return (
    <div className="bg-green-950 h-full w-full  flex flex-col justify-between items-center text-white pt-40">
      <div className='text-center  pb-10 space-y-7'>
        <h1 className='text-3xl md:text-7xl font-bold space-x-10'>The first <br /> AI-powered Mortgage</h1>
        <div >
            <p className='w-full md:w-[800px] mx-auto text-center text-xl' >Our tech unlocks lower rates, higher chances of approval, and a lightning‑fast process from approval to closing. Over $100 billion funded.</p>
        </div>
       <div className='space-y-5'>
         <button className='bg-green-400 p-5 rounded-full px-8 text-lg cursor-pointer hover:bg-green-950 transition-all duration-300'>Start my pre-approval</button>
         <p className='text-sm'>3 min | No hard credit check</p>
       </div>
      </div>
      <div className='w-full md:w-[500px] h-96 flex justify-center px-10'>
        <img className='w-full h-96' src="/ai-powered-fico.png" alt="" />
      </div>
    </div>
  )
}
