import React from "react";
import { useParams, NavLink } from "react-router-dom";
import snippetsData from "../data/snippetsData";
import CodeBlock from "../components/CodeBlock";
import { ColourfulText } from "../components/ui/ColourfulText";
import ReactMarkdown from "react-markdown";

export default function SnippetDetail() {
  const { id } = useParams();
  const snippet = snippetsData.find((s) => s.id === Number(id));

  if (!snippet) return <h1 className="text-red-500">Snippet Not Found</h1>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900 py-20 px-4">
      <div className="max-w-5xl w-full space-y-8">
        {/* Back to Snippets Button */}
        <NavLink
          to="/snippets"
          className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-6 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 transition-transform group-hover:-translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-lg font-medium">All Snippets</span>
        </NavLink>

        {/* Snippet Card */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl shadow-md p-10 transition-shadow duration-300 w-230 ml-10 mt-0">
          {/* Snippet Title & Image */}
          <div className="flex items-center mb-10">
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
              <ColourfulText text={snippet.title} />
            </h1>
            {snippet.image && (
              <img
                src={snippet.image}
                alt={snippet.title}
                className="h-10 w-11 ml-4 overflow-hidden rounded-md flex justify-center items-center"
              />
            )}
          </div>

          {/* Snippet Description */}
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-left">
            {snippet.description}
          </p>

          {/* Render Multiple Code Blocks with Left-Aligned Title & Description */}
          {snippet.codes.map((codeSection, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden mb-6 p-6 bg-gray-50 dark:bg-gray-900"
            >
              {/* Title & Description (Left-Aligned, Above Code Block) */}
              <div className="text-left mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {codeSection.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 whitespace-pre-line">
                  <ReactMarkdown>{codeSection.description}</ReactMarkdown>
                </p>
              </div>

              {/* Code Block */}
              <CodeBlock code={codeSection.code} language={codeSection.language} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
