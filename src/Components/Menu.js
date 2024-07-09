import React from "react";
import { IoIosMenu } from "react-icons/io";
import { FaInfoCircle, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { AppContext } from "./AppContextProvider";

function Menu() {
  const { setMenuBar, aboutRef, skillsRef, projectsRef, contactRef } = React.useContext(AppContext);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setMenuBar((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 h-full w-full md:w-[300px] bg-gray-800 text-white flex flex-col p-6 transition-all duration-500 ease-in-out z-50">
      <button 
        className="self-end text-2xl mb-4 text-white hover:text-gray-400" 
        onClick={() => setMenuBar((prev) => !prev)}
      >
        <IoIosMenu />
      </button>
      <div className="flex flex-col gap-6 font-mono font-bold text-lg">
        <button 
          className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300" 
          onClick={() => scrollToSection(aboutRef)}
        >
          <FaInfoCircle />
          About
        </button>
        <button 
          className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300" 
          onClick={() => scrollToSection(skillsRef)}
        >
          <FaTools />
          Skills
        </button>
        <button 
          className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300" 
          onClick={() => scrollToSection(projectsRef)}
        >
          <FaProjectDiagram />
          Projects
        </button>
        <button 
          className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300" 
          onClick={() => scrollToSection(contactRef)}
        >
          <FaEnvelope />
          Contact Me!
        </button>
      </div>
    </div>
  );
}

export default Menu;
