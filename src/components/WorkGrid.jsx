import { Link } from "react-router-dom";

const projects = [
  {
    title: "gigHive: Discover, Learn, Achieve",
    category: "UX Case Study",
    image: "/assets/images/Thumbnails/thumbnail_gighive.jpg",
    link: "/gighive",
  },
  {
    title: "Star Speakers Academy Website",
    category: "UX Case Study",
    image: "/assets/images/Thumbnails/thumbnail_ssa.jpg",
    link: "/starspeakersacademy",
  },
  {
    title: "Expressing Through Design: A Collection of My Works",
    category: "Designs",
    image: "/assets/images/Thumbnails/thumbnail_arts.jpg",
    link: "/creativeworks",
  },
];

function WorkGrid() {
  return (
    <div className=" w-full px-[5vw] md:px-10 pt-[5vw] md:pt-10 lg:px-[7vw] lg:pt-[8vh] relative pb-40">
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[2vw] md:gap-[1vw]  items-center overflow-hidden">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={project.link}
            className="block w-full group relative overflow-hidden "
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default WorkGrid;
