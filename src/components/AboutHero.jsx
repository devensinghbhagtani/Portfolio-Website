function AboutHero() {
  return (
    <div className="md:h-screen w-full px-[5vw] md:px-10 pt-[10vw] md:pt-10 lg:px-[7vw] lg:pt-[8vh] relative mb-10 lg:mb-0">
      <div className="md:flex lg:items-center gap-4">
        <div className="flex flex-col gap-6 md:gap-6  ">
          <div className=" md:hidden w-full h-[280px] md:min-w-[50%] md:min-h-[75vh] overflow-hidden relative ">
            <img
              src="/assets/images/Artboard 2.jpg"
              alt="Deven Bhagtani"
              className="w-full h-full  object-cover "
              style={{ imageRendering: "pixelated" }}
            />
          </div>
          <h1 className="tracking-tighter text-2xl md:text-4xl leading-6 md:leading-9 m-0 w-[90%] lg:w-[70%]">
            Rooted & Rising
          </h1>

          <p className="leading-snug md:text-lg  tracking-tight w-[90%] lg:w-[70%]">
            Hey again! I'm <span className="font-medium ">Deven Bhagtani</span>{" "}
            — a creative soul from India, passionate about bringing ideas to
            life through design, video, and art. From sketching superheroes to
            experimenting with Sindhi recipes, I love crafting meaningful
            experiences. I stay grounded and inspired through daily Sahajyoga
            meditation.
          </p>
          <div className=" tracking-tight md:text-lg w-[90%] lg:w-[80%]">
            <div className="flex items-center gap-4">
              <div className="flex flex-wrap leading-tight items-center gap-2">
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  #CreativeDesigner
                </h1>
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  #CalmCore
                </h1>
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  #DigitalStoryteller
                </h1>
                <h1 className="px-3 py-2 border-[1px] rounded-full w-fit">
                  #LifeOfAnArtist
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full h-[280px] md:min-w-[50%] md:min-h-[75vh] overflow-hidden relative ">
          <img
            src="/assets/images/Artboard 2.jpg"
            alt="Deven Bhagtani"
            className="w-full h-full  object-cover "
            style={{ imageRendering: "pixelated" }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
