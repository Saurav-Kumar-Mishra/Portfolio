import React, { createContext, useState, useRef } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [menuBar, setMenuBar] = useState(false);

  const colorMode = {
    color: darkMode ? "" : "white",
    backgroundColor: darkMode ? "white" : "black",
  };
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const value = {
    darkMode,
    setDarkMode,
    colorMode,
    menuBar,
    setMenuBar,
    skillsRef,
    aboutRef,
    projectsRef,
    contactRef,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
