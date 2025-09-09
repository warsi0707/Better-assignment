import CalcInput from "@/components/CalcInput";
import { CgDollar } from "react-icons/cg";
export default function Calculators() {
  return (
    <div className="min-h-screen w-full bg-green-50 p-10 lg:p-32 pt-32 space-y-16">
      <h1 className="text-4xl lg:text-6xl font-bold">
        Estimate your monthly <br /> mortgage payments
      </h1>
      <div className="w-full flex flex-col bg-slate-100 border rounded-2xl py-5 lg:grid grid-cols-6">
        <div className="h-full space-y-10 col-span-4  p-14">
          <div className="flex flex-col lg:flex-row justify-between gap-5">
           <div className="w-full  rounded-xl ">
             <CalcInput title={"Home Price"}/>
           </div>
           <div className="w-full">
              <CalcInput  title={"Down payment"}/>
           </div>
          
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <CalcInput  title={"Interest rate"}/>
            <CalcInput  title={"Zip code"}/>
          </div>
        </div>
        <div className="h-full col-span-2 flex gap-5 flex-col justify-center items-center text-start">
          <p className="text-xl">Monthly payment</p>
          <p className="flex items-center text-3xl font-bold"><CgDollar/>100/mo</p>
          <button className="bg-green-800 p-5 px-8 rounded-xl text-white cursor-pointer">Get pre-approved</button>
        </div>
      </div>
    </div>
  );
}
