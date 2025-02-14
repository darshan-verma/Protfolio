import React from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import ThemeToggleSwitch from "./components/ThemeToggle";


function App() {
  
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen h-screen overflow-y-auto">
      <ThemeToggleSwitch />

      <AppRoutes />
     
    </div>
  );
}

export default App;
