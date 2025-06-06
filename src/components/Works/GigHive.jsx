import CursorFollower from "../CursorFollower";

function GigHive() {
  return (
    <div className="w-full relative ">
      <CursorFollower />
      <div className="h-screen px-[5vw] md:px-[8vw] lg:px-[14vw] flex items-center ">
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-6 md:gap-8 md:items-center">
          <div className="md:min-w-[40%] md:max-w-[40%] flex flex-col gap-4 md:gap-8">
            <h1 className="text-2xl max-w-[400px] md:text-4xl tracking-tighter leading-7 md:leading-10  ">
              gigHive: Connecting Learners, Clients, Freelancers & Educators
            </h1>
            <h1 className="md:block hidden text-md md:text-lg leading-tight tracking-tight  px-3 py-2 border-[1px] w-fit rounded-full">
              Aug 2019 - Mobile
            </h1>
          </div>

          <div className="h-[280px] md:min-w-[50%] md:min-h-[60vh] overflow-hidden relative ">
            <img
              src="/assets/images/gighive_main.png"
              className="w-full h-full  object-cover "
              style={{ imageRendering: "pixelated" }}
            />
          </div>
          <h1 className="md:hidden  text-md md:text-lg leading-tight tracking-tight  px-3 py-2 border-[1px] w-fit rounded-full">
            Aug 2019 - Mobile
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-[5vw] md:px-[8vw] lg:px-[14vw] flex flex-col gap-10 md:gap-20 tracking-tighter">
        {/*Images*/}
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <img
            src="/assets/images/gighive_icon1.png"
            alt=""
            className="md:w-[49%] w-full h-[42vw] md:h-auto lg:h-[18vw] object-cover"
            style={{ imageRendering: "pixelated" }}
          />
          <img
            src="/assets/images/gighive_icon2.png"
            alt=""
            className="md:w-[49%] w-full h-[42vw] md:h-auto lg:h-[18vw] object-cover"
            style={{ imageRendering: "pixelated" }}
          />
        </div>

        <div className="w-[90%] md:w-[70%]">
          {/* <h1 className="text-5xl mb-2 font-medium ">gigHive</h1> */}
          <h1 className="md:text-xl  leading-snug">
            <span className="">gigHive</span> is a comprehensive platform
            designed to create a collaborative ecosystem for freelancers,
            clients, educators, and learners. The app’s primary goal is to
            facilitate skill development, professional networking, and seamless
            collaboration.
          </h1>
        </div>

        {/*Images*/}
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <img
            src="/assets/images/gighive_mockup1.jpg"
            alt=""
            className="md:w-[49%] w-full h-[60vw] md:h-auto lg:h-[30vw] object-cover"
          />
          <img
            src="/assets/images/gighive_mockup2.jpg"
            alt=""
            className="md:w-[49%] w-full h-[60vw] md:h-auto lg:h-[30vw] object-cover"
          />
        </div>

        {/*Design System*/}
        <div className="w-full">
          {/* <h1 className="text-4xl mb-4 font-medium ">Design System</h1> */}
          <h1 className="w-[90%] md:w-[70%] md:text-xl  leading-snug">
            Although gigHive’s development was fast-tracked without a detailed
            design process, the app’s functionality reflects an intuitive
            structure tailored to user needs.{" "}
          </h1>
          <div className="mt-4 md:text-lg">
            <div className="flex items-center gap-4">
              <div className="flex flex-wrap leading-tight items-center gap-2">
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  Personas
                </h1>
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  User Flow
                </h1>
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  Wireframes
                </h1>
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  Functional Prototype
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/*Wireframes*/}
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-xl tracking-tighter md:text-3xl">Wireframes</h1>
          <div className="w-full overflow-hidden">
            <img src="/assets/images/gighive_wireframes.png" alt="" />
          </div>
        </div>

        {/*Final Interface*/}
        <div className="flex flex-col gap-4 md:gap-6 mb-40">
          <h1 className="text-xl tracking-tighter md:text-3xl">Final UI</h1>
          <div className="w-full overflow-hidden">
            <img src="/assets/images/gighive_ui2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GigHive;
