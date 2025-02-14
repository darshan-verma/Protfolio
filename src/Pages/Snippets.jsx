import React, { useState } from "react";
import { cn } from "../lib/utils";
import { ColourfulText } from "../components/ui/ColourfulText";
import { useNavigate } from "react-router-dom";
import snippetsData from "../data/snippetsData";

export const SnippetCard = React.memo(
  ({ snippet, index, hovered, setHovered }) => {
    const navigate = useNavigate();

    return (
      <div
        onClick={() => navigate(`/snippets/${snippet.id}`)} // Navigation added
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-3xl relative bg-gray-100 dark:bg-gray-800 overflow-hidden h-60 md:h-40 w-100 py-4 px-2 transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        {snippet.image && (
          <div className="h-15 w-15 mb-2 overflow-hidden rounded-md flex justify-center items-center my-0 py-0">
            <img
              src={snippet.image}
              alt={snippet.title}
              className="object-contain h-full w-full p-2"
            />
          </div>
        )}
        <div className="text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-50 justify-start">
          <h3 className="font-bold text-yellow-500">{snippet.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {snippet.description}
          </p>
        </div>
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-md font-medium text-neutral-50 mb-20">
            View Code
          </div>
        </div>
      </div>
    );
  }
);

SnippetCard.displayName = "SnippetCard";

export default function Snippets() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="container mx-auto p-4 pt-1 min-h-full mt-30 pb-0">
      <div className="grid place-items-start ml-16 sm:ml-0 md:ml-80 ">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
          <ColourfulText text="Snippets" />
        </h2>
        <p className="ml-8 sm:ml-12 md:ml-16 lg:ml-20 xl:ml-0 text-left">
          Reusable code snippets that can be easily integrated in your
          application 🧩. The page contains functions and
        </p>
        <p className="ml-8 sm:ml-12 md:ml-16 lg:ml-20 xl:ml-0 text-left">
          code snippets which can be used on your webpage.
        </p>
      </div>

      <div className="flex justify-center py-12 px-0 ml-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 px-70">
          {snippetsData.map((snippet, index) => (
            <SnippetCard
              key={snippet.id}
              snippet={snippet}
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
