import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorFollower = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 60, stiffness: 400, mass: 0.2 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch device
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);

    if (isTouch) return; // Don't attach listeners on mobile

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, .interactive'
    );

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null; // 🛑 Don't render on mobile

  return (
    <motion.div
      style={{
        left: springX,
        top: springY,
      }}
      className="fixed pointer-events-none z-50 rounded-full"
      animate={{
        width: isHovering ? 20 : 22,
        height: isHovering ? 20 : 22,
        scale: isHovering ? 0.8 : 1,
        backgroundColor: "#D7FF0D",
        opacity: isHovering ? 0.9 : 0.4,
      }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 200,
        mass: 0.3,
      }}
    />
  );
};

export default CursorFollower;
