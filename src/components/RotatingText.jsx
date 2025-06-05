import React from "react";

function RotatingText() {
  return (
    <div className="relative w-18 h-18 md:w-28 md:h-28 mx-auto my-10 font-[JetBrains_Mono]">
      {/* Rotating Text */}
      <div className="rotating-text absolute inset-0 flex items-center justify-center text-[13px] text-black">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="circle"
              d="M 50, 50
                 m -35, 0
                 a 35,35 0 1,1 70,0
                 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text>
            <textPath href="#circle" startOffset="0%">
              Hover over the photo
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#D7FF0D] rounded-full z-10" />
    </div>
  );
}

export default RotatingText;
