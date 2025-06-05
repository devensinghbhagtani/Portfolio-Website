import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
];

function Navbar() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(null); // set null by default
  const navRefs = useRef([]);
  const [highlightStyle, setHighlightStyle] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  // Entrance animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Update active index only if path matches navItems
  useEffect(() => {
    const currentIndex = navItems.findIndex(
      (item) => item.path === location.pathname
    );
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    } else {
      setActiveIndex(null); // No match, no highlight
    }
  }, [location.pathname]);

  // Update highlight style based on activeIndex
  useEffect(() => {
    if (activeIndex !== null) {
      const current = navRefs.current[activeIndex];
      if (current) {
        const { offsetLeft, offsetWidth } = current;
        setHighlightStyle({
          left: offsetLeft,
          width: offsetWidth,
        });
      }
    } else {
      // If not a valid route, hide highlight
      setHighlightStyle({});
    }
  }, [activeIndex]);

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 overflow-hidden"
    >
      <div className="relative flex border-1 rounded-full md:text-lg bg-white">
        {/* Sliding Background */}
        {activeIndex !== null && (
          <motion.div
            className="absolute top-0 bottom-0 bg-[#D7FF0D] rounded-full transition-all duration-300 ease-in-out"
            style={{ ...highlightStyle }}
          />
        )}

        {navItems.map((item, index) => (
          <NavLink
            key={item.name}
            to={item.path}
            ref={(el) => (navRefs.current[index] = el)}
            className={`relative z-10 px-6 py-2 transition-colors duration-300 ${
              location.pathname === item.path ? "text-black" : "text-black"
            }`}
          >
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;
