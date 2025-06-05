import AnimatedText from "./AnimatedText";

function AboutFooter() {
  return (
    <div className="h-screen px-[5vw] md:px-10 lg:px-[7vw] items-center flex flex-col  justify-center gap-12">
      <AnimatedText className="leading-none text-[10vw] md:text-[71px] lg:text-[7vw] text-center">
        Say Hello
      </AnimatedText>
      <div className="flex gap-20 md:text-lg">
        <a
          href="mailto:bhagtanideven@gmail.com"
          className="cursor-pointer underline"
        >
          Email Me
        </a>
        <a
          href="https://linkedin.com/in/deven-bhagtani"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default AboutFooter;
