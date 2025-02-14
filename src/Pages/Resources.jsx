"use client";
import React, { useState } from "react";
import { cn } from "../lib/utils";
import { ColourfulText } from "../components/ui/ColourfulText";

// ResourceCard Component
export const ResourceCard = React.memo(
  ({ resource, index, hovered, setHovered }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-3xl relative bg-gray-100 dark:bg-gray-800 overflow-hidden h-60 md:h-40 w-100 py-4 px-2 transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      {/* Image Section */}
      {/* {resource.image && (
  <div className="h-15 w-15 mb-2  overflow-hidden rounded-md flex justify-center items-center my-0 py-0">
    <img
      src={resource.image}
      alt={resource.title}
      className="object-contain h-full w-full p-2"
    />
  </div>
)} */}

      {/* Title & Description */}
      <div className="text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-50 justify-start">
        <h3 className="font-bold text-yellow-500">{resource.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {resource.description}
        </p>
      </div>

      {/* Hover Effect */}
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <a href={resource.link} target="_blank" rel="noopener noreferrer">
          <button className="text-md text-neutral-50 hover:text-yellow-500 font-bold  duration-200 mt-8">
            View Source
          </button>
        </a>
      </div>
    </div>
  )
);

ResourceCard.displayName = "ResourceCard";

// ResourceSection Component
export default function Resources() {
  const [hovered, setHovered] = useState(null);

  const resourcesData = [
    {
      title: "Colors and Fonts",
      description:
        "Color & typography tools for web developers & digital designers",
      link: "https://www.colorsandfonts.com/",
    },
    {
      title: "CheckBoxes Inspiration",
      description: "Beautiful CSS checkboxes examples",
      link: "https://getcssscan.com/css-checkboxes-examples",
    },
    {
      title: "Buttons Inspiration",
      description: "Beautiful CSS buttons examples",
      link: "https://getcssscan.com/css-buttons-examples",
    },
    {
      title: "React Icons",
      description: "Great icon packs from many websites",
      link: "https://react-icons.github.io/react-icons/",
    },
    {
      title: "Lookup.design",
      description: "Website component inspirations",
      link: "https://lookup.design/",
    },
    {
      title: "1000+ Website Inspiration",
      description: "Beautiful adnd Modern Website Inspirations",
      link: "https://supercreative.design/1000-inspiring-websites",
    },
    {
      title: "Beautiful Mockups",
      description: "Beautiful Mobile and Webpage Mockups",
      link: "https://shots.so/",
    },
    {
      title: "Email Templates with Tailwind",
      description: "Email templates with Tailwind and HTML",
      link: "https://maizzle.com/",
    },
  ];

  return (
    <div className="container mx-auto p-4 pt-1 min-h-full mt-30 pb-0">
      {/* Heading */}
      <div className="flex flex-col items-start">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-shadow-md text-shadow-gray-400 mb-4 ml-8 sm:ml-12 md:ml-16 lg:ml-20 xl:ml-80 text-center">
          <ColourfulText text="Resources" />
        </h2>
        <p className="ml-8 sm:ml-12 md:ml-16 lg:ml-20 xl:ml-80 text-left">
          Helpful websites that will help you in developing applications and
          much more. 🔥
        </p>
      </div>

      {/* Resources Grid */}
      <div className="flex justify-center py-12 px-0 ml-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 px-70">
          {resourcesData.map((resource, index) => (
            <ResourceCard
              key={resource.title}
              resource={resource}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
