import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='min-h-screen w-full p-20 flex flex-col md:flex-row justify-between gap-5 border-t-2 border-gray-300'>
      <div className='space-y-5 '>
        <h1 className='text-3xl font-bold text-green-600'>Better</h1>
        <p>Better is a family of companies serving all your homeownership needs.</p>
        <div>
            <p className='text-3xl font-bold text-green-800'>Better Mortage</p>
            <p>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
        </div>
        <div>
            <p className='text-3xl font-bold text-green-800'>Better Mortage</p>
            <p>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
        </div>
        <div>
            <p className='text-3xl font-bold text-green-800'>Better Mortage</p>
            <p>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
        </div>
        <div>
            <p className='text-3xl font-bold text-green-800'>Better Mortage</p>
            <p>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
        </div>
      </div>
      <div className='space-y-5'>
        <p className='text-3xl font-bold  text-green-800'>Resources</p>
        <p>Home affordability calculator</p>
        <p>Mortgage calculator</p>
        <p>Free mortgage calculator</p>
        <p>Mortgage calculator with taxes</p>
      </div>
      <div className='flex flex-col space-y-5'>
        <p className='text-3xl font-bold  text-green-800'>Compony</p>
        <Link href={""}>About Us</Link>
        <Link href={""}>About Us</Link>
        <Link href={""}>About Us</Link>
        <Link href={""}>About Us</Link>
        <Link href={""}>About Us</Link>
      </div>
    
    </div>
  )
}
