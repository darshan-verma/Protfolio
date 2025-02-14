import React from "react";
import { cn } from "../lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useRef, useState} from "react";


export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => (
  
  <>
    <FloatingDockDesktop items={items} className={desktopClassName} />
    <FloatingDockMobile items={items} className={mobileClassName} />
  </>
);

// Mobile Dock
const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("fixed bottom-4 right-4 md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div layoutId="nav" className="absolute bottom-14 right-0 flex flex-col gap-2">
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { delay: idx * 0.05 } }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <NavLink
                  to={item.href}
                  className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
                >
                  <div className="h-4 w-4 text-black dark:text-white transition-colors duration-300">{item.icon}</div>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-12 w-12 rounded-full bg-yellow-400 dark:bg-yellow-600 flex items-center justify-center shadow-md"
      >
        <IconLayoutNavbarCollapse className="h-6 w-6 text-black dark:text-white transition-colors duration-300" />
      </button>
    </div>
  );
};

// Desktop Dock
const FloatingDockDesktop = ({ items, className }) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
     
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn("hidden md:flex gap-4 items-center bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-2 rounded-full transition-colors duration-300", className)}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

const IconContainer = ({ mouseX, title, icon, href }) => {
  const ref = useRef(null);
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const size = useSpring(useTransform(distance, [-150, 0, 150], [40, 80, 40]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <NavLink to={href}>
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-yellow-500 flex items-center justify-center relative transition-colors duration-300"
      >
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -top-8 px-2 py-1 bg-black text-white text-xs rounded-md"
          >
            {title}
          </motion.div>
        )}
        <div className="text-black dark:text-white transition-colors duration-300">{icon}</div>
      </motion.div>
    </NavLink>
  );
};



