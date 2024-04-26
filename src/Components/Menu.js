import React from "react";
import { IoIosMenu } from "react-icons/io";
import { AppContext } from "./AppContextProvider";

function Menu() {
  const { setMenuBar,aboutRef,skillsRef,projectsRef,contactRef} = React.useContext(AppContext);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setMenuBar((prev)=>!prev)
  };
  return (
    <div className="absolute rounded-r-[50px] gap-5 md:w-[768px] bg-gray-400 text-white h-screen w-[212px] flex flex-col transition-all duration-500 ease-in-out">
      <div className="flex flex-col p-4 gap-5 justify-start items-start font-mono text-black font-bold ">
        <button onClick={()=>setMenuBar((prev)=>!prev)}><IoIosMenu /></button>
        <button onClick={() => scrollToSection(aboutRef)}>About</button>
              <button onClick={() => scrollToSection(skillsRef)}>Skills</button>
              <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
              <button onClick={() => scrollToSection(contactRef)}>Contact Me!</button>
      </div>
    </div>
  );
}

export default Menu;
