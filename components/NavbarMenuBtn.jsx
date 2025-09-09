import React, { memo } from 'react'
import { FaCaretDown } from "react-icons/fa";

function NavbarMenuBtn({title}) {
  return (
    <div className="flex justify-between">
            <p>{title}</p>
            <button className='cursor-pointer'><FaCaretDown/></button>
          </div>
  )
}
export default memo(NavbarMenuBtn)