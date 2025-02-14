import React from "react";
import "./MainLayout.css";
import Footer from "../components/Footer";
import NavbarSection from "../components/NavbarSection";


const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen text-center">
      <NavbarSection/>
      <main className="mt-10">{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
