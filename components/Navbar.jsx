'use client'
import Link from "next/link";
import NavLinks from "./NavLinks";
import { IoCallOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import NavbarMenuBtn from "./NavbarMenuBtn";

export default function Navbar() {
  const [menu, setmenu] = useState(false)
  const [isScrolled, setScrolled] = useState(false)

  useEffect(()=> {
    const handleScroll =()=> {
      if(window.scrollY >1080){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll)
  },[])
  return (
   <>
    <div className={`flex w-full justify-between  ${isScrolled ==false?"bg-green-950 text-white": "bg-white text-black"}  p-5 items-center shadow-2xl border-b border-green-900 fixed`} >
        <div className=" items-center justify-center gap-10 flex">
            <Link href={"/"} className="text-2xl font-bold">Better</Link>
            <div className=" items-center justify-center sm:gap-3 md:gap-5  hidden lg:flex">
                <NavLinks title={'Buy'}/>
                <NavLinks title={'Refinance'}/>
                <NavLinks title={'HELOC'}/>
                <NavLinks title={'Rates'}/>
                <NavLinks title={'Better+'}/>  
            </div>
        </div>
        <div className="flex items-center gap-2">
            <button className="cursor-pointer border p-2 md:p-5 rounded-full hover:bg-white hover:text-black"><IoCallOutline/></button>
            <div className="hidden lg:flex"> <NavLinks title={'Signin'}/> </div> 
            <button onClick={()=> setmenu(!menu)} className="lg:hidden text-xl cursor-pointer"><FaBars/></button>
        </div>
    </div>
    {menu &&
    <div className="h-screen w-full fixed bg-white space-y-10 p-10">
      <div className="flex justify-between text-4xl font-bold">
        <p>Better</p>
        <button onClick={()=> setmenu(!menu)} className="cursor-pointer"><RxCross1/></button>
      </div>
      <NavbarMenuBtn title={"Buy"}/>
      <NavbarMenuBtn title={"BuRefinnancey"}/>
      <NavbarMenuBtn title={"HELOC"}/>
      <NavbarMenuBtn title={"Better+"}/>
    </div>
}
   </>
  )
}
