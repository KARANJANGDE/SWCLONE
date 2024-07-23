import React from "react";
import image from "/resource.png";
export default function ResourePage() {
  return (
    <div className="h-full w-full flex justify-start items-center gap-10 bg-[#E84A5F]">
      <div className="ml-[100px]">
        {" "}
        <img
          className="w-[450px] h-[450px]"
          src={image}
          alt="logo of image"
        ></img>
      </div>
      <div className="text-white">
        <div className="font-normal ">
          <p className="uppercase">Resources</p>
        </div>
        <div className="text-[45px] font-semibold font-Inter leading-tight mt-3">
          <p>Web 3</p>
        </div>
        <div className="mt-4 font-Inter font-medium text-[20px] tracking-wide ">
          <quote>by SWHabitation</quote>
        </div>
      </div>
    </div>
  );
}
