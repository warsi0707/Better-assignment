import Link from "next/link";
import { BiHomeAlt } from "react-icons/bi";
import { ImHome3 } from "react-icons/im";
import { SiHomebridge } from "react-icons/si";
import { BiDollar } from "react-icons/bi";
import { CiPercent } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { MdOutlinePhoneIphone } from "react-icons/md";
export default function Start() {
  return (
    <div className="min-h-screen w-full pt-32 py-20 px-5">
      <div className="w-full lg:w-[600px] mx-auto flex flex-col gap-8 justify-center items-center">
        <h1 className="text-center text-5xl font-semibold">
          Hi, I'm Betsy! <br /> Whart can i help you with?
        </h1>
        <Link
          href={""}
          className="w-full  p-5 rounded-xl border flex  gap-2 text-2xl hover:border-4 hover:border-green-700 transition-all duration-300"
        >
          <BiHomeAlt /> Buying a home
        </Link>
        <Link
          href={""}
          className="w-full  p-5 rounded-xl border flex  gap-2 text-2xl hover:border-4 hover:border-green-700 transition-all duration-300"
        >
          <ImHome3 /> Refinancing my mortgage
        </Link>
        <Link
          href={""}
          className="w-full  p-5 rounded-xl border flex  gap-2 text-2xl hover:border-4 hover:border-green-700 transition-all duration-300"
        >
          <SiHomebridge /> Get cash from my home
        </Link>
        <div className="flex justify-center md:justify-between w-full">
          <div className="flex flex-col items-center gap-2">
            <p className="flex items-center text-3xl font-semibold">
              <BiDollar />
              100B
            </p>
            <p>home loans funded entirely online</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="flex items-center text-3xl font-semibold">400K</p>
            <p>Customers who chose a Better Mortgage</p>
          </div>
        </div>
        <div className="w-full p-10 bg-green-100 flex justify-center items-center">
          <div className="text-xl space-y-2">
            <p>After a few questions, you'll unlock:</p>
            <div className="flex items-center mx-auto">
              <p>
                <CiPercent />
              </p>
              <p>Custom mortgage rates</p>
            </div>
            <div className="flex items-center">
              <p>
                <CiDollar />
              </p>
              <p>Exclusive offers</p>
            </div>
            <div className="flex items-center">
              <p>
                <MdOutlinePhoneIphone />
              </p>
              <p>A personalized dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
