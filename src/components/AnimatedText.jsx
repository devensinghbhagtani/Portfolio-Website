import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function AnimatedText({ children, className = "" }) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, {
      type: "chars",
      charsClass: "char",
    });

    gsap.set(split.chars, {
      opacity: 0,
      filter: "blur(5px)",
      willChange: "opacity, filter",
    });

    const isMobile = window.innerWidth < 768;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: textRef.current,
          scrub: 0.5,
          start: isMobile ? "top 90%" : "top 90%",
          end: isMobile ? "bottom 60%" : "bottom 60%",
        },
      })
      .to(split.chars, {
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.02,
        duration: 0.3,
        ease: "power2.out",
      });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      if (split) split.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <h1 ref={textRef} className={`tracking-tighter ${className}`}>
      {children}
    </h1>
  );
}

export default AnimatedText;
