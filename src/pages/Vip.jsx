import React from "react";
import img2 from "../assets/halloween ritual_table packages_1.jpg";
import { useNavigate } from "react-router-dom";
const Vip = () => {
  const nav = useNavigate()
  return (
    <div className="flex flex-col gap-3 py-5 justify-center items-center">
      <img src={img2} alt="" className="w-full h-full lg:w-[50%] lg:h-[50%]" />
      <button onClick={()=>nav('/')} className="bg-red-600 text-white rounded px-10 py-3">Go Back to Home</button>

    </div>
  );
};

export default Vip;
