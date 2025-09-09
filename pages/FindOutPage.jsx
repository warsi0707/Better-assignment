import Link from 'next/link';
import React from 'react'
import { GoStar } from "react-icons/go";

export default function FindOutPage() {
  return (
    <div className='w-full min-h-screen bg-white text-black flex flex-col-reverse p-5 lg:flex-row md:p-20'>
      <div className='h-96 md:min-h-screen w-full flex flex-col gap-5 md:justify-center pl-10'>
        <img className='w-72 md:w-96 h-96 md:h-[600px] rounded-3xl' src="https://images.unsplash.com/photo-1756747840159-f81cc8607ece?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='w-full md:w-96 flex justify-between'>
            <Link href={""} className='border p-3 px-7 rounded-full border-gray-300 hover:border-4 hover:border-green-700 hover:text-green-700'>Paul</Link>
            <Link href={""} className='border p-3 px-7 rounded-full border-gray-300 hover:border-4 hover:border-green-700 hover:text-green-700'>Amanda</Link>
            <Link href={""} className='border p-3 px-7 rounded-full border-gray-300 hover:border-4 hover:border-green-700 hover:text-green-700'>Tiara</Link>
            
        </div>
      </div>
      <div className='h-96 md:min-h-screen w-full  flex flex-col gap-5  items-center md:justify-center md:items-start'>
        <h1 className='text-4xl md:text-6xl font-semibold md:font-extrabold text-center'>Find out why <br /> we're better.</h1>
         <button className='bg-green-900 text-white p-5 rounded-full md:px-8 text-lg cursor-pointer hover:bg-green-950 transition-all duration-300'>See all our stories</button>
         <div className='flex items-center gap-5'>
            <p className='flex items-center gap-1'> <GoStar/> Trustpilot </p>
            <p>Excellent 4.4 out of 5</p>
         </div>
      </div>
    </div>
  )
}
