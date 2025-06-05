import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CursorFollower from "../CursorFollower";

function CreativeWorks() {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <CursorFollower />
      <div className="w-full relative ">
        <div className="h-screen px-[5vw] md:px-[8vw] lg:px-[14vw] flex items-center ">
          <div className="w-full flex flex-col md:flex-row md:justify-between gap-6 md:gap-8 md:items-center">
            <div className="md:min-w-[40%] md:max-w-[40%] flex flex-col gap-4 md:gap-8">
              <h1 className="text-2xl max-w-[400px] md:text-4xl tracking-tighter leading-7 md:leading-10  ">
                Expressing Through Design: A Collection of My Works
              </h1>
              <h1 className="md:block hidden text-md md:text-lg leading-tight tracking-tight  px-3 py-2 border-[1px] w-fit rounded-full">
                Scroll
              </h1>
            </div>

            <div className="h-[280px] md:min-w-[50%] md:min-h-[60vh] overflow-hidden relative ">
              <img
                src="/assets/images/Artwork/creative_main.jpg"
                className="w-full h-full object-cover "
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <h1 className="md:hidden  text-md md:text-lg leading-tight tracking-tight  px-3 py-2 border-[1px] w-fit rounded-full">
              Scroll
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-[5vw] md:px-[8vw] lg:px-[14vw] flex flex-col gap-10 md:gap-20 tracking-tighter">
          {/*Overview*/}
          <div className="flex flex-col gap-4 md:gap-6 w-[90%] md:w-[70%]">
            <h1 className="text-xl md:text-3xl tracking-tighter leading-6 md:leading-9">
              Design, Pixels & a Little Bit of Chaos
            </h1>
            <h1 className="md:text-xl leading-snug">
              Being a graphic designer means sorting through countless ideas to
              find the one that fits just right. I'm obsessive about
              details—yes, I’ll spend 30 minutes on letter spacing no one
              notices. I design with intention, combining research and
              creativity. From leading design teams at ISTE and GDSC to client
              projects and competitions, here’s a peek into my ever-evolving
              design journey.
            </h1>
            <div className="mt-4 md:text-lg">
              <div className="flex items-center gap-4">
                <div className="flex flex-wrap leading-tight items-center gap-2">
                  <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                    #DetailOriented
                  </h1>
                  <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                    #ISTE
                  </h1>
                  <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                    #GDSC{" "}
                  </h1>
                  <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                    #EndlessRevisions
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/*Personalized Card Designs*/}
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-xl tracking-tighter md:text-3xl leading-6 md:leading-9">
              Personalized Card Designs
            </h1>
            <div className="w-full overflow-hidden">
              <img src="/assets/images/Artwork/card_1.jpg" alt="" />
            </div>
            <div className="w-full overflow-hidden">
              <img src="/assets/images/Artwork/card_2.jpg" alt="" />
            </div>
          </div>

          {/*Social Media Creatives*/}
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-xl md:text-3xl tracking-tighter leading-6 md:leading-9">
              Social Media Creatives
            </h1>
            <div className="w-full overflow-hidden">
              <img src="/assets/images/Artwork/instapost.jpg" alt="" />
            </div>
          </div>

          {/*Magazine Design*/}
          <div className="flex flex-col gap-4 md:gap-6 ">
            <h1 className="text-xl md:text-3xl tracking-tighter leading-6 md:leading-9">
              Magazine Design
            </h1>
            <h1 className="md:text-xl w-[90%] md:w-[70%] leading-snug">
              Led the design for Mindroid Vol. 2, a college magazine featuring
              structured layouts and engaging visuals for an enhanced reading
              experience.
            </h1>
            <a
              href="https://drive.google.com/file/d/1Kx_Udsry4Ds_SAJWp2VByX1Tc4EHhNqP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button hidden relative py-2 rounded-full border border-black px-3 md:flex items-center overflow-hidden group w-fit"
            >
              <span className="default-text text-md md:text-lg relative transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-6 group-hover:scale-90 tracking-tighter">
                View Magazine
              </span>
              <span className="hover-text  text-md md:text-lg text-white absolute transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-6 scale-110 opacity-0 group-hover:translate-y-0 group-hover:scale-100  group-hover:opacity-100 tracking-tighter">
                View Magazine
              </span>
            </a>
            <a
              href="https://drive.google.com/file/d/1Kx_Udsry4Ds_SAJWp2VByX1Tc4EHhNqP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden relative py-2 rounded-full border border-black px-3 flex items-center overflow-hidden group w-fit"
            >
              <h1 className="md:text-lg">View Magazine</h1>
            </a>
            <div className="w-full overflow-hidden">
              <img src="/assets/images/Artwork/mindroid.jpg" alt="" />
            </div>
          </div>

          {/*Desi Khwab*/}
          <div className="flex flex-col gap-4 md:gap-6 ">
            <h1 className="text-xl md:text-3xl tracking-tighter">Desi Khwab</h1>
            <h1 className="md:text-xl w-[90%] md:w-[70%] leading-snug">
              A collection of digital artworks blending ancient figures with an
              Indian touch, merging traditional influences with modern
              aesthetics.
            </h1>
            <a
              href="https://www.behance.net/gallery/198921719/Desi-Khwab-Vol-1"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button hidden relative py-2 rounded-full border border-black px-3 md:flex items-center overflow-hidden group w-fit"
            >
              <span className="default-text text-md md:text-lg relative transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-6 group-hover:scale-90 tracking-tighter">
                View Collection
              </span>
              <span className="hover-text  text-md md:text-lg text-white absolute transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-6 scale-110 opacity-0 group-hover:translate-y-0 group-hover:scale-100  group-hover:opacity-100 tracking-tighter">
                View Collection
              </span>
            </a>
            <a
              href="https://www.behance.net/gallery/198921719/Desi-Khwab-Vol-1"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden relative py-2 rounded-full border border-black px-3 flex items-center overflow-hidden group w-fit"
            >
              <h1 className="md:text-lg">View Collection</h1>
            </a>
            <div className="w-full overflow-hidden">
              <img src="/assets/images/Artwork/desi_khwab.jpg" alt="" />
            </div>
            <div className="w-full overflow-hidden">
              <img src="/assets/images/Artwork/desi_khwab1.jpg" alt="" />
            </div>
          </div>

          {/*Competition Winning Designs*/}
          <div className="flex flex-col gap-4 md:gap-6 mb-40">
            <h1 className="text-xl md:text-3xl tracking-tighter leading-6 md:leading-9">
              Competition Winning Designs
            </h1>
            <h1 className="md:text-xl w-[90%] md:w-[70%] leading-snug">
              Led a team of six in a competition as the captain of{" "}
              <a
                className="underline"
                href="https://www.youtube.com/playlist?list=PLM39N0JUThN_zoheOfiK_6LWmHHVmHZwk"
              >
                Prevailers
              </a>
              , overseeing the team’s visual identity. Designed individual
              captain posts, a logo reveal video, and a team lookbook — which
              won 1st place for the lookbook and 2nd place for the logo reveal.
            </h1>
            <a
              href="https://drive.google.com/drive/folders/1S3IqY3n1QaON545hmo6kv5nJeM6twwqw?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button hidden relative py-2 rounded-full border border-black px-3 md:flex items-center overflow-hidden group w-fit"
            >
              <span className="default-text text-md md:text-lg relative transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-6 group-hover:scale-90 tracking-tighter">
                View Project
              </span>
              <span className="hover-text  text-md md:text-lg text-white absolute transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-6 scale-110 opacity-0 group-hover:translate-y-0 group-hover:scale-100  group-hover:opacity-100 tracking-tighter">
                View Project
              </span>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1S3IqY3n1QaON545hmo6kv5nJeM6twwqw?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden relative py-2 rounded-full border border-black px-3 flex items-center overflow-hidden group w-fit"
            >
              <h1 className="md:text-lg">View Project</h1>
            </a>
            {/*Swiper*/}
            <div className="relative">
              <Swiper
                navigation={{
                  prevEl: ".custom-prev",
                  nextEl: ".custom-next",
                }}
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 2000 }}
                className="mySwiper hover:cursor-grab"
              >
                {slides.map((num) => (
                  <SwiperSlide
                    key={num}
                    className="flex justify-center items-center"
                  >
                    <img
                      className="md:w-1/2 m-auto "
                      src={`/assets/images/Artwork/slider${num}.png`}
                      alt={`Slide ${num}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="hidden md:block custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 scale-x-[-1] text-2xl border-[1px] px-4 w-12 h-12 rounded-full cursor-pointer z-20 ">
                <img
                  src="/assets/slidericon1.svg"
                  alt="Previous"
                  className="m-auto"
                />
              </button>
              <button className="hidden md:block custom-next absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl border-[1px] px-4 w-12 h-12 rounded-full cursor-pointer z-20">
                <img
                  src="/assets/slidericon1.svg"
                  alt="Previous"
                  className="m-auto"
                />
              </button>
            </div>
            <div className="w-full overflow-hidden">
              <img
                className="scale-102"
                src="/assets/images/Artwork/logo_reveal.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativeWorks;
