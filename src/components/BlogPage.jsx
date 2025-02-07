import React from "react";
import blogimage from "/blogimage.png";

export default function BlogPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-[#FEFFEA] p-10">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-[45px] font-medium my-24 ml-1 text-start text-gray-800">
          Blogs
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <li
                key={index}
                className="bg-transparent border-[#99B898] p-8 overflow-hidden border list-none flex flex-col items-center"
              >
                <img
                  className="h-[340px] w-full object-cover"
                  src={blogimage}
                  alt="blog image"
                />
                <div className="pt-[75px] text-xl flex flex-row gap-8 items-center justify-start">
                  <div>
                    <p className="text-gray-700 font-bold mb-4 ">
                      How to add dark mode in next.js application using tailwind
                      css ?
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <div className=" bg-gray-300 w-5 h-5"></div>
                    <div className=" bg-gray-500 w-5 h-5"></div>
                    <div className=" bg-[#E84A5F] w-5 h-5"></div>
                    <div className=" bg-[#99B898] w-5 h-5"></div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <div className="flex pt-20 pb-10 justify-center items-center">
          <button className="px-20 py-4 text-lg bg-[#99B898] text-white font-medium border-2 border-transparent shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:bg-transparent hover:border-[#99B898] hover:text-[#99B898] transition-shadow duration-200">
            Discover More Blogs{" "}
            <span className="text-[23px] font-normal">&#187;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
