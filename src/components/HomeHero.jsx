import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PixelatedImage from "./PixelatedImage";
import RotatingText from "./RotatingText";
import { Link } from "react-router-dom";

// Character animation
const characterVariants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
  visible: (i) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Reusable animated line
const AnimatedLine = ({ text, align = "left", delayOffset = 0 }) => (
  <h1
    className={`leading-none text-[10vw] md:text-[71px] lg:text-[7vw] tracking-tighter m-0 text-${align}`}
  >
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i + delayOffset}
        initial="hidden"
        animate="visible"
        variants={characterVariants}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </h1>
);

function HomeHero() {
  const [triggerHover, setTriggerHover] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTriggerHover(true);
      setTimeout(() => setTriggerHover(false), 1500);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full px-[5vw] md:px-10 pt-[10vw] md:pt-10 lg:px-[7vw] lg:pt-[8vh] relative pb-20">
      {/* Animated Headings */}
      <div className="w-full mb-8 space-y-1 md:space-y-0  md:mb-4">
        {/* Mobile View: 3 lines */}
        <div className="block md:hidden space-y-1">
          <AnimatedLine text="DESIGNING DEVEN IDEAS," align="left" />
          <AnimatedLine text="DELIVERING" align="left" delayOffset={20} />
          <AnimatedLine text="IMPACT" align="left" delayOffset={40} />
        </div>

        {/* Desktop View: 2 lines */}
        <div className="hidden md:block space-y-1">
          <AnimatedLine text="DESIGNING IDEAS," align="left" />
          <AnimatedLine
            text="DELIVERING IMPACT"
            align="right"
            delayOffset={20}
          />
        </div>
      </div>

      <div className="lg:flex justify-between items-center gap-10">
        {/* Pixelated Image */}
        <div
          // data-tooltip="Click to open menu Click to open menu Click to open menu Click to open menu"
          className=" flex items-center gap-4 md:gap-10"
        >
          <div className=" lg:top-[36vh] max-w-[250px] md:max-w-full h-[280px] md:w-[45vh] md:h-[48vh] overflow-hidden">
            <PixelatedImage
              src="src/assets/images/itsme.jpg"
              alt="Deven Bhagtani"
              initialScale={0.05}
              duration={800}
              triggerHover={triggerHover}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="block lg:hidden ">
            <RotatingText />
          </div>
        </div>
        <div className="hidden lg:block ">
          <RotatingText />
        </div>
        {/* About & CTA */}
        <div className="mt-8 md:mt-4 tracking-tight lg:mt-0 flex justify-end">
          <div className="w-[70vw] md:w-[50vw]  lg:w-[42vw]">
            <div className="flex flex-col gap-2 w-[90%] md:w-[70%] lg:w-[60%]">
              <p className="text-justify text-md md:text-lg mb-4 leading-tight">
                I'm <span className="font-medium ">Deven Bhagtani</span>, a UX
                and Visual Designer who combines creativity, coding, and a
                background in video editing to craft intuitive and impactful
                digital experiences.
              </p>
            </div>
            <div className=" md:flex gap-2 md:gap-8 flex flex-col md:flex-row md:items-center ">
              <Link
                to="/work"
                className="cta-button hidden  relative py-2 rounded-full border border-black px-6 md:flex items-center overflow-hidden group w-fit"
              >
                <span className="font-medium default-text text-md md:text-lg relative transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-6 group-hover:scale-90 tracking-tighter">
                  See my projects
                </span>
                <span className="font-medium hover-text  text-md md:text-lg text-white absolute transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-6 scale-110 opacity-0 group-hover:translate-y-0 group-hover:scale-100  group-hover:opacity-100 tracking-tighter">
                  See my projects
                </span>
              </Link>
              <Link
                href="/work"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden relative py-2 rounded-full border border-black px-3 flex items-center overflow-hidden group w-fit"
              >
                <h1 className="md:text-lg"> See my projects</h1>
              </Link>
              <a
                href="https://drive.google.com/file/d/1-QQeziHvXDYnRguVtO0jdVbiiVV5nAPK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-black md:text-lg transition-all duration-300 group overflow-hidden"
              >
                <span className="group-hover:text-black">Resume</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
