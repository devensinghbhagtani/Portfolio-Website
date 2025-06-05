const mantras1 = [
  {
    title: "Mantra 1",
    image: "src/assets/images/Mantras/Mantra1.jpg",
  },
  {
    title: "Mantra 2",
    image: "src/assets/images/Mantras/Mantra2.jpg",
  },
];

const mantras2 = [
  {
    title: "Mantra 3",
    image: "src/assets/images/Mantras/Mantra3.jpg",
  },
  {
    title: "Mantra 4",
    image: "src/assets/images/Mantras/Mantra4.jpg",
  },
  {
    title: "Mantra 5",
    image: "src/assets/images/Mantras/Mantra5.jpg",
  },
];

function Mantras() {
  return (
    <div className="w-full px-[5vw] md:px-10 pt-24 md:pt-0 lg:px-[7vw] ">
      <div className="">
        <h1 className="lg:gap-4 mb-4 md:mb-6 md:w-full text-xl md:text-3xl tracking-tighter ">
          Mantras I live by
        </h1>

        {/* First Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-4 md:mb-0">
          {mantras1.map((mantra, index) => (
            <div key={index} className="w-full">
              <div className="overflow-hidden  md:mb-4 lg:mb-6">
                <img src={mantra.image} alt={mantra.title} className="w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Second Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {mantras2.map((mantra, index) => (
            <div key={index} className="w-full">
              <div className="overflow-hidden  ">
                <img src={mantra.image} alt={mantra.title} className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mantras;
