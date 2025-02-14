// src/components/Navbar.jsx
// import React from "react";
// import { NavLink } from "react-router-dom";
// import { FloatingDock } from "./FloatingDock";
// import { HomeIcon, BookOpenIcon, CodeBracketIcon, FolderIcon, StarIcon } from "@heroicons/react/24/outline";

// const navItems = [
//   { title: "Home", href: "/", icon: <HomeIcon className="h-5 w-5" /> },
//   { title: "Blog", href: "/blog", icon: <BookOpenIcon className="h-5 w-5" /> },
//   { title: "Projects", href: "/projects", icon: <FolderIcon className="h-5 w-5" /> },
//   { title: "Snippets", href: "/snippets", icon: <CodeBracketIcon className="h-5 w-5" /> },
//   { title: "Resources", href: "/resources", icon: <StarIcon className="h-5 w-5" /> },
// ];

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-10 transform translate-x-310 translate-y-10 z-50 dark:bg-gray-900">
//       <FloatingDock items={navItems} />
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import { FloatingDock } from "./FloatingDock";
import {
  HomeIcon,
  BookOpenIcon,
  CodeBracketIcon,
  FolderIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { title: "Home", href: "/", icon: <HomeIcon className="h-5 w-5" /> },
  { title: "Blog", href: "/blog", icon: <BookOpenIcon className="h-5 w-5" /> },
  {
    title: "Projects",
    href: "/projects",
    icon: <FolderIcon className="h-5 w-5" />,
  },
  {
    title: "Snippets",
    href: "/snippets",
    icon: <CodeBracketIcon className="h-5 w-5" />,
  },
  {
    title: "Resources",
    href: "/resources",
    icon: <StarIcon className="h-5 w-5" />,
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-5 right-5 transform -translate-y-1/2 z-50 dark:bg-gray-900 md:right-10 lg:right-16 xl:right-20 mt-15">
      <FloatingDock items={navItems} />
    </nav>
  );
};

export default Navbar;
