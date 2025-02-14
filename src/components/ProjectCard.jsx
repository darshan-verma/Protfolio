import React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "../hooks/useOutsideClick"; // Ensure this hook exists
import { NavLink } from "react-router-dom"; // Import NavLink for navigation
import { ColourfulText } from "./ui/ColourfulText";
import ProjectVideo1 from "../assets/videos/hero-4.mp4";
import ProjectVideo2 from "../assets/videos/feature-2.mp4";
import ProjectVideo3 from "../assets/videos/feature-3.mp4"; // New video for second card
import ProjectVideo4 from "../assets/videos/feature-4.mp4"; // New video for second card


const ProjectCard = () => {
  const [showOverlay1, setShowOverlay1] = useState(false);
  const [showOverlay2, setShowOverlay2] = useState(false);
  const overlayRef1 = useRef(null);
  const overlayRef2 = useRef(null);

  // Custom hook to detect clicks outside the overlay
  useOutsideClick(overlayRef1, () => setShowOverlay1(false));
  useOutsideClick(overlayRef2, () => setShowOverlay2(false));

  return (
    <div className="container mx-auto p-4 pt-2 min-h-screen mt-30">
      <div className="flex flex-col items-start">
      <h2 className="name text-7xl font-sans antialiased font-bold tracking-tight text-shadow-md text-shadow-gray-400 mb-4 ml-84">
                    <ColourfulText text="Projects" /> {/* Apply the animated text */}
                  </h2>
                  <p className="ml-8 sm:ml-12 md:ml-16 lg:ml-20 xl:ml-84 mb-10 text-left">
        I like to create what you can imagine , here are some of my projects.
      </p>
                  </div>
      <div className="relative">
        
        {/* Main Project Card 1 */}
        <div
          onClick={() => setShowOverlay1(true)}
          className="mx-auto cursor-pointer rounded-lg border border-gray-300 bg-white p-2 shadow-md transition-all hover:scale-[1.02] dark:border-gray-700 dark:bg-gray-900 md:w-210 mb-10"
        >
          <video
            src={ProjectVideo1}
            alt="My Video"
            className="h-60 w-full rounded-lg object-cover"
            autoPlay
            loop
            muted
          />
          <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Meta Game
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            A responsive front-end project using GSAP, Tailwind CSS, and
            interactive media for an engaging experience.
          </p>
        </div>

        {/* Overlay for First Expanded View */}
        
        <AnimatePresence>
          {showOverlay1 && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                ref={overlayRef1}
                className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <button
                  onClick={() => setShowOverlay1(false)}
                  className="absolute right-4 top-4 rounded-full bg-gray-200 p-2 dark:bg-gray-700"
                  aria-label="Close Overlay"
                >
                  ✕
                </button>

                <video
                  src={ProjectVideo2}
                  alt="My Video"
                  className="mb-4 w-full rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Meta Game
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Switch to Meta World
                </p>

                <div className="mt-4 flex justify-between">
                  <a
                    href="https://meta-game.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                  >
                    Live Preview
                  </a>

                  <a
                    href="https://github.com/darshan-verma/MetaGame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-300 px-4 py-2 text-gray-800 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
                  >
                    View Code
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Project Card 2 */}
        <div
          onClick={() => setShowOverlay2(true)}
          className="mx-auto cursor-pointer rounded-lg border border-gray-300 bg-white p-2 shadow-md transition-all hover:scale-[1.02] dark:border-gray-700 dark:bg-gray-900 md:w-210 mt-5 "
        >
          <video
            src={ProjectVideo3}
            alt="My Video"
            className="h-60 w-full rounded-lg object-cover"
            autoPlay
            loop
            muted
          />
          <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Sumz
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          A responsive article summarizer ,which works effortlessly to give you summaries .
          </p>
        </div>

        {/* Overlay for Second Expanded View */}
        <AnimatePresence>
          {showOverlay2 && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                ref={overlayRef2}
                className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <button
                  onClick={() => setShowOverlay2(false)}
                  className="absolute right-4 top-4 rounded-full bg-gray-200 p-2 dark:bg-gray-700"
                  aria-label="Close Overlay"
                >
                  ✕
                </button>

                <video
                  src={ProjectVideo4}
                  alt="My Video"
                  className="mb-4 w-full rounded-lg object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Sumz
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
               Let's Summarize
                </p>

                <div className="mt-4 flex justify-between">
                  <a
                    href="https://sumz-up-with-ai.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                  >
                    Live Preview
                  </a>

                  <a
                    href="https://github.com/darshan-verma/Sumz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-300 px-4 py-2 text-gray-800 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
                  >
                    View Code
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-6">
        <NavLink
          to="/projects"
          className="text-yellow-500 hover:text-yellow-400 transition duration-300 text-sm font-semibold border border-yellow-500 px-6 py-2 rounded-lg"
        >
          View More Projects →
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectCard;

