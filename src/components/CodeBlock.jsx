import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ code, language }) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-md">
      <SyntaxHighlighter language={language} style={vscDarkPlus} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
