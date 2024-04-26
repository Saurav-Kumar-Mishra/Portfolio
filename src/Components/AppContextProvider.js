import React, { createContext, useState, useRef } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Data from "./Data";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [menuBar, setMenuBar]=useState(false);
  // const [toggleFav, setToggleFav] = useState(Data.isItFavourite);
  
  const colorMode = {
    color: darkMode ? "white" : "black",
    backgroundColor: darkMode ? "#1e272e" : "white",
  };

  const skillsRef=useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const value = {
    darkMode,
    setDarkMode,
    colorMode,
    menuBar, 
    setMenuBar,
    // toggleFav,
    // setToggleFav
    skillsRef,
    aboutRef,
    projectsRef,
    contactRef
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
