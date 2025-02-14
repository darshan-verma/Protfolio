import React from "react";
import "../assets/fonts/inter-var-latin.woff2";
import profileImage from "../assets/profile.png";
import { ColourfulText } from "./ui/ColourfulText";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
const Hero = () => {
  return (
    // <BackgroundGradientAnimation>
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[40vh] text-left w-full max-w-4xl mx-auto overflow-hidden px-4 md:px-8 mt-20">
      <div className="left-group w-1/2">
        <section className="intro-section">
          <div className="intro-content ml-0">
          <h1 className="name text-7xl font-sans antialiased font-bold tracking-tight text-shadow-md text-shadow-gray-400">
              <ColourfulText text="Darshan Verma" /> {/* Apply the animated text */}
            </h1>
            <p className="ml-0 text-lg font-sans antialiased font-medium">
              Building dynamic, responsive, and visually stunning web
              experiences with React.
            </p>
            <p className="description ml-0 font-sans antialiased font-light text-lg">
              Want to have a peek at{" "}
              <span className="inline-block bg-yellow-300 rounded-md shadow-md shadow-gray-100 p-1 hover:bg-yellow-200">
                <a
                  href="https://meta-game.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-900"
                >
                  Meta Game
                </a>
              </span>{" "}
              and{" "}
              <span className="inline-block bg-yellow-300 rounded-md shadow-md shadow-gray-100 p-1 hover:bg-yellow-200">
                <a
                  href="https://sumz-up-with-ai.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-900"
                >
                  Sumz
                </a>
              </span>
            </p>
          </div>
        </section>
      </div>
      <div className="right-group w-1/2 flex justify-end">
        <div className="profile-image-container rounded-full overflow-hidden shadow-md shadow-gray-400 mr-10">
          <img
            src={profileImage}
            alt="Darshan Verma"
            className="profile-image object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
    // </BackgroundGradientAnimation>
  );
};

export default Hero;
