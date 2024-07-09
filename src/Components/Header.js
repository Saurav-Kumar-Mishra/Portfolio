import React from "react";
import { IoIosMenu } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { AppContext } from "./AppContextProvider";
import Menu from "./Menu";
import './Header.css'

function Header() {
  const { darkMode, setDarkMode, menuBar, setMenuBar, skillsRef, contactRef, aboutRef, projectsRef } =
    React.useContext(AppContext);
  const [discardMenu, setDiscardMenu] = React.useState(false);

  function handleResize() {
    if (window.innerWidth >= 768) {
      setDiscardMenu(true);
    } else setDiscardMenu(false);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {menuBar ? (
        <Menu />
      ) : (
        <div
       
          className={`w-screen   p-4 fixed ${darkMode? "bg-[#1d1f1f] text-white" :" bg-[#1d1f1f]"} flex justify-around items-center z-30 static`}
        >
       { !discardMenu && 
          <button onClick={() => setMenuBar((prev) => !prev)}>
            <IoIosMenu className="text-2xl" />
          </button>}
          <div className="text-[#FFBD39] text-xl font-serif font-bold lg:text-2xl">
            Portfolio
          </div>
          {discardMenu && (
            <div className="hidden  md:flex md:gap-4 lg:gap-6">
              <button className="move-tabs hover:text-[#FFBD39] hover:underline hover:decoration-4 hover:underline-offset-[10px] hover:decoration-[#FFBD39]"  onClick={() => scrollToSection(aboutRef)}>About</button>
              <button className="move-tabs hover:text-[#FFBD39] hover:underline hover:decoration-4 hover:underline-offset-[10px] hover:decoration-[#FFBD39] " onClick={() => scrollToSection(skillsRef)}>Skills</button>
              <button className="hover:text-[#FFBD39] hover:underline hover:decoration-4 hover:underline-offset-[10px] hover:decoration-[#FFBD39]" onClick={() => scrollToSection(projectsRef)}>Projects</button>
              <button className="hover:text-[#FFBD39] hover:underline hover:decoration-4 hover:underline-offset-[10px] hover:decoration-[#FFBD39]" onClick={() => scrollToSection(contactRef)}>Contact Me!</button>
            </div>
          )}
          <div className="flex items-center gap-4">
            <a
              target="blank"
              href="https://drive.google.com/file/d/1cT-KpOME4MJd6OwLvFCb8xOohPxaXQN_/view?usp=sharing"
              className="border-2 px-4 py-3 text-xs cursor-pointer rounded-full hover:bg-[#f5c566] bg-[#FFBD39] poppins-regular border-none text-black"
            >
              Get My Resume
            </a>
            {darkMode ? (
              <button className="text-2xl" onClick={() => setDarkMode((prevMode) => !prevMode)}>
                <CiLight />
              </button>
            ) : (
              <button className="text-2xl" onClick={() => setDarkMode((prevMode) => !prevMode)}>
                <MdDarkMode />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
