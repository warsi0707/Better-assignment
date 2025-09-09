import { FaArrowRight } from "react-icons/fa";
import React from 'react'

export default function QuestionsPage() {
  return (
    <div className='p-16 min-h-screen space-y-5 w-full'>
      <div className='flex flex-col justify-center items-center gap-5 mt-10 md:justify-between lg:flex-row'>
        <h1 className='text-5xl font-semibold'>Got questions? <br /> We've got answers</h1>
        <div className='flex h-14 gap-5'>
            <button className='border-4 border-green-800 px-5 py-0 rounded-full cursor-pointer hover:bg-green-900 hover:text-white'>Our Products</button>
            <button className='border-4 border-green-800 px-5 py-0 rounded-full cursor-pointer hover:bg-green-900 hover:text-white'>Calculators</button>
            <button className='border-4 border-green-800 px-5 py-0 rounded-full cursor-pointer hover:bg-green-900 hover:text-white'>Giudes & FAQs</button>
        </div>
      </div>
      <div className='w-full py-2  flex flex-col lg:grid grid-cols-6 gap-5'>
        <div className='h-full  space-y-5  col-span-2 px-10 p-8 bg-green-50 rounded-2xl'>
            <p className='text-3xl'>How AI Mortgage Lending is Transforming the Home Loan Process</p>
            <button className="border p-5 rounded-full cursor-pointer hover:bg-green-800 hover:text-white transition-all duration-300"><FaArrowRight/></button>
            <img className="w-full h-3/6" src="ai-mortgage.png" alt="" />
        </div>
        <div className='h-full bg-green-50 rounded-2xl col-span-4 p-7 flex flex-col gap-2 lg:justify-between'>
            <div className="space-y-8">
                <p className="text-2xl font-semibold ">One Day Mortgage</p>
                <p className="hidden lg:flex">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur facere saepe cum optio deserunt dolorum veniam rerum aliquid tenetur facilis distinctio pariatur repellat sequi, sit consequatur quisquam minima, illum enim.</p>
                 <button className="border p-5 rounded-full cursor-pointer hover:bg-green-800 hover:text-white transition-all duration-300"><FaArrowRight/></button>
            </div>
            <img className="h-full w-full lg:w-72" src="/one-day-mortgage.png" alt="" />
        </div>
      </div>

      <div className='w-full py-2  flex flex-col-reverse lg:flex-row lg:grid grid-cols-6 gap-5'>
        <div className='h-full bg-green-50 rounded-2xl col-span-4 p-7 flex flex-col gap-2 lg:justify-between'>
            <div className="space-y-8">
                <p className="text-2xl font-semibold ">One Day Mortgage</p>
                <p className="hidden lg:flex">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur facere saepe cum optio deserunt dolorum veniam rerum aliquid tenetur facilis distinctio pariatur repellat sequi, sit consequatur quisquam minima, illum enim.</p>
                 <button className="border p-5 rounded-full cursor-pointer hover:bg-green-800 hover:text-white transition-all duration-300"><FaArrowRight/></button>
            </div>
            <img className="h-full w-full lg:w-72" src="/one-day-mortgage.png" alt="" />
        </div>
        <div className='h-full w-full space-y-5  col-span-2 px-10 p-8 bg-green-50 rounded-2xl'>
            <p className='text-3xl'>How AI Mortgage Lending is Transforming the Home Loan Process</p>
            <button className="border p-5 rounded-full cursor-pointer hover:bg-green-800 hover:text-white transition-all duration-300"><FaArrowRight/></button>
            <img className="w-full h-3/6" src="ai-mortgage.png" alt="" />
        </div>
        
      </div>
      
    </div>
  )
}
