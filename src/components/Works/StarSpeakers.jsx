import React from "react";
import CursorFollower from "../CursorFollower";

function StarSpeakers() {
  return (
    <div className="w-full relative ">
      <CursorFollower />

      <div className="h-screen px-[5vw] md:px-[8vw] lg:px-[14vw] flex items-center ">
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-6 md:gap-8 md:items-center">
          <div className="md:min-w-[40%] md:max-w-[40%] flex flex-col gap-4 md:gap-8">
            <h1 className="text-2xl max-w-[400px] md:text-4xl tracking-tighter leading-7 md:leading-10  ">
              UX Case Study: Star Speakers Academy Website
            </h1>
            <h1 className="md:block hidden text-md md:text-lg leading-tight tracking-tight  px-3 py-2 border-[1px] w-fit rounded-full">
              Jul - Aug 2019
            </h1>
          </div>

          <div className="h-[280px] md:min-w-[50%] md:min-h-[60vh] overflow-hidden relative ">
            <img
              src="/assets/images/starspeakers_main.jpg"
              className="w-full h-full  object-cover "
              style={{ imageRendering: "pixelated" }}
            />
          </div>
          <h1 className="md:hidden  text-md md:text-lg leading-tight tracking-tight  px-3 py-2 border-[1px] w-fit rounded-full">
            Jul - Aug 2019
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-[5vw] md:px-[8vw] lg:px-[14vw] flex flex-col gap-10 md:gap-20 tracking-tighter">
        {/*Images*/}
        <div className="w-full h-[40vh] md:flex items-center overflow-hidden relative">
          <img
            className="w-full h-full absolute object-cover"
            src="/assets/images/starspeakers_website.jpg"
            style={{ imageRendering: "pixelated" }}
          />
        </div>

        <div className="flex flex-col gap-4 md:gap-6 w-[90%] md:w-[70%]">
          {/* <h1 className="text-xl md:text-3xl">Overview</h1> */}
          <h1 className="md:text-xl  leading-snug">
            The Star Speakers Academy website was a group project focused on
            building an engaging, responsive platform for students to explore
            communication courses, offering a seamless and accessible experience
            across all devices.
          </h1>
        </div>
        {/*Images*/}
        <div className="w-full flex items-center overflow-hidden">
          <img
            className="w-full object-cover scale-101"
            src="/assets/images/starspeakers_ui2.gif"
            style={{ imageRendering: "pixelated" }}
          />
        </div>

        <div className="flex flex-col gap-4 md:gap-6 w-[90%] md:w-[70%]">
          {/* <h1 className="text-xl md:text-3xl">Overview</h1> */}
          <h1 className="md:text-xl leading-snug">
            We followed a structured UX process to meet client goals and user
            needs. In discovery, we defined the vision, identified personas, and
            gathered insights. During ideation, we built a clear sitemap,
            prioritized trust elements like testimonials, and focused on visuals
            and intuitive course flow.{" "}
          </h1>
          <div className="mt-4 md:text-lg">
            <div className="flex items-center gap-4">
              <div className="flex flex-wrap leading-tight items-center gap-2">
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  Personas
                </h1>
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  Stakeholder Interviews
                </h1>
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  Competitive Analysis
                </h1>
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  Engaging Visuals
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/*Design System*/}
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-xl tracking-tighter md:text-3xl">
            Design System
          </h1>
          <div className="w-full overflow-hidden">
            <img src="/assets/images/starspeakers_typography.jpg" alt="" />
          </div>
        </div>

        {/*Final Interface*/}
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-xl tracking-tighter md:text-3xl">Master Class</h1>
          <div className="w-full overflow-hidden">
            <img src="/assets/images/starspeakers_ui3.png" alt="" />
          </div>
        </div>

        {/*Final Interface*/}
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-xl tracking-tighter md:text-3xl">Final Design</h1>
          <div className="w-full overflow-hidden">
            <img src="/assets/images/starspeakers_ui.gif" alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 w-[90%] md:w-[70%] mb-40 ">
          {/* <h1 className="text-xl md:text-3xl">Overview</h1> */}
          <h1 className="md:text-xl leading-snug">
            The Star Speakers Academy site enhanced user engagement and
            simplified course discovery. Its clear layout, testimonials, and
            partnerships built trust, while the dynamic admin panel ensured easy
            content updates.
          </h1>
          <div className="mt-4 md:text-lg">
            <div className="flex items-center gap-4">
              <div className="flex flex-wrap leading-tight items-center gap-2">
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  Improved engagement
                </h1>
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  Easy course discovery
                </h1>
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  Credibility through testimonials
                </h1>
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  Dynamic admin panel
                </h1>
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  Smooth content updates
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarSpeakers;
