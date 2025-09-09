import Link from 'next/link'
import React, { memo } from 'react'

 function NavLinks({title}) {
  return (
     <Link href={""} className='hover:bg-white hover:text-black py-4 px-6 rounded-full transition-all duration-300'>{title}</Link>
  )
}
export default memo(NavLinks)