import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import BlogCards from "./components/BlogCard";
import BlogPage from "./Pages/Blog"
import Snippets from "./Pages/Snippets";
import SnippetDetail from "./Pages/SnippetsDetail";
import Resources from "./Pages/Resources";
import Projects from "./Pages/Projects";



const AppRoutes = () => {
  return (
    <Router>
      
      <MainLayout> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogCards />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/snippets" element={<Snippets />} />
          <Route path="/snippets/:id" element={<SnippetDetail />} /> {/* Dynamic Route */}
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </MainLayout>
      
    </Router>
    
  );
};

export default AppRoutes;
