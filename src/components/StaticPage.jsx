import React from "react";

export default function StaticPage() {
  return (
    <div className="w-full h-screen flex flex-row justify-between items-center bg-[#99B898]">
      <div className="w-[55%] ml-16">
        <div className="font-normal">
          <p className="ml-1">Resources</p>
        </div>
        <div className="text-[45px] font-semibold font-Inter leading-tight text-gray-800 mt-5">
          <p>React FrameWork</p>
        </div>
        <div className="mt-4 font-Inter font-medium text-[20px] tracking-wide ">
          <quote>by SWHabitation</quote>
        </div>
      </div>
      <div className="w-[45%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 400 400"
          height="500"
          width="500"
        >
          <rect
            fill="#333333"
            transform="rotate(90 400 200)"
            height="200"
            width="200"
            y="200"
            x="400"
          />
          <circle
            fill="#FEFFEA"
            transform="matrix(1 0 0 -1 225 375)"
            r="75"
            cy="75"
            cx="75"
          />
          <rect
            fill="#FEFFEA"
            transform="matrix(0 -1 -1 0 400 200)"
            height="200"
            width="200"
          />
          <rect
            fill="#333333"
            transform="matrix(0 -1 -1 0 400 200)"
            height="200"
            width="100"
          />
          <rect
            fill="#333333"
            transform="matrix(0 -1 -1 0 400 200)"
            height="200"
            width="100"
          />
          <rect
            fill="#333333"
            transform="rotate(-90 0 400)"
            height="200"
            width="200"
            y="400"
          />
          <path
            fill="#FCFC62"
            d="M178.787 200H192.929L0 392.929V378.787L178.787 200ZM21.2132 400H7.07106L200 207.071V221.213L21.2132 400ZM35.3553 400H49.4975L200 249.497V235.355L35.3553 400ZM77.7817 400H63.6396L200 263.64V277.782L77.7817 400ZM91.9239 400H106.066L200 306.066V291.924L91.9239 400ZM134.35 400H120.208L200 320.208V334.35L134.35 400ZM148.492 400H162.635L200 362.635V348.492L148.492 400ZM190.919 400H176.777L200 376.777V390.919L190.919 400ZM164.645 200H150.503L0 350.503V364.645L164.645 200ZM122.218 200H136.36L0 336.36V322.218L122.218 200ZM108.076 200H93.934L0 293.934V308.076L108.076 200ZM65.6497 200H79.7918L0 279.792V265.65L65.6497 200ZM51.5076 200H37.3654L0 237.365V251.508L51.5076 200ZM9.08116 200H23.2233L0 223.223V209.081L9.08116 200Z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          />
          <rect
            fill="#FCFC62"
            transform="matrix(0 -1 -1 0 200 200)"
            height="200"
            width="200"
          />
          <rect
            fill="#E84A5F"
            transform="matrix(-0.707107 0.707107 0.707107 0.707107 100 65)"
            height="50"
            width="50"
          />
        </svg>
      </div>
    </div>
  );
}
