import React, { useEffect, useRef, useState } from "react";

const HoverTooltip = () => {
  const tooltipRef = useRef(null);
  const [tooltipText, setTooltipText] = useState("");
  const [visible, setVisible] = useState(false);

  // target and current positions
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const tooltipEl = tooltipRef.current;

    const handleMouseMove = (e) => {
      const target = e.target.closest("[data-tooltip]");
      if (target) {
        setTooltipText(target.getAttribute("data-tooltip"));
        setVisible(true);
        targetPos.current = {
          x: e.clientX + 20,
          y: e.clientY + 20,
        };
      } else {
        setVisible(false);
      }
    };

    const animate = () => {
      const lerp = (a, b, n) => a + (b - a) * n;
      currentPos.current.x = lerp(
        currentPos.current.x,
        targetPos.current.x,
        0.15
      );
      currentPos.current.y = lerp(
        currentPos.current.y,
        targetPos.current.y,
        0.15
      );

      if (tooltipEl) {
        tooltipEl.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={tooltipRef}
      className={`fixed z-[9999] pointer-events-none transition-opacity duration-0 text-xs  font-['JetBrains_Mono']  w-[200px] 
        ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {tooltipText}
    </div>
  );
};

export default HoverTooltip;
