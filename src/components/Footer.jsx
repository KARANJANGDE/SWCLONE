import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-[75vh] bg-[#FEFFEA] flex justify-center items-end">
      <div className="w-full h-[60vh] rounded-t-[300px] bg-[#ed7a5e] flex flex-col justify-around items-center">
        <div className="flex flex-col w-full justify-center items-center">
          <p className="p-5 text-[40px] font-bold text-center w-[40vw]">
            Join our Newsletter & get daily updates.
          </p>

          <form className="flex flex-row gap-2 w-full max-w-[500px] px-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border border-white px-4 py-2 placeholder-white text-white bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-[#ed7a5e]"
            />
            <button className="py-2 px-4 w-[200px] bg-[#FEFFEA] text-[25px] text-zinc-900 font-medium border hover:bg-transparent hover:border-white hover:text-white ease-in-out duration-300">
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-row gap-8 mt-8 bg-transparent text-zinc-900 text-[28px] font-normal px-4 py-2 rounded-md">
          <button>Medium</button>
          <button>Twitter X</button>
          <button>Quora</button>
          <button>Instagram</button>
          <button>LinkedIn</button>
        </div>
        <div className="flex flex-row gap-4 mt-4">
          <button className="">Privacy Policy</button>
          <button className=" ">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
