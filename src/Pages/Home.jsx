import React from "react";
import Hero from "../components/Hero";
import BlogCards from "../components/BlogCard";
import ProjectCard from "../components/ProjectCard";
import { BackgroundGradientAnimation } from "../components/BackgroundGradientAnimation";
import Resources from "./Resources";
import SnippetsCardSection from "../components/SnippetsCardSection";
import ResourceCardSection from "../components/ResourceCardSection";


const projectData = {
  src: "/assets/project-image.jpg", // Replace with actual image path
  title: "My Cool Project",
  description: "A short description of the project.",
  previewLink: "/live-preview", // Replace with actual link
  repoLink: "/repo-link", // Replace with actual GitHub repo
};
const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>

      {/* Add spacing between Hero and BlogCards */}
      <div>
        <BlogCards />
      </div>
      <div className="p-6">
        <ProjectCard card={projectData} />
      </div>
      <div className="-mt-30">
        <SnippetsCardSection/>
      </div>
      <div className="mt-30">
        <ResourceCardSection/>
      </div>
    </div>
  );
};

export default Home;
