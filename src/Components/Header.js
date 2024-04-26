import React from "react";
import { IoIosMenu } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { AppContext } from "./AppContextProvider";
import Menu from "./Menu";

function Header() {

  const { darkMode, setDarkMode, colorMode, menuBar, setMenuBar,skillsRef,contactRef,aboutRef,projectsRef } =
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
          style={colorMode}
          className={`  w-screen ${!darkMode && "bg-[#102C57]"} flex justify-around items-center md:min-w-[768px] lg:w-screen lg:p-2  transition ease-in-out delay-1000`}
        >
          <button onClick={() => setMenuBar((prev) => !prev)}>
            {!discardMenu && <IoIosMenu />}
          </button>
          <div className=" text-pink-400 p-2 font-mono font-bold lg:text-xl animate-textGlow">
            Portfolio
          </div>
          {discardMenu && (
            <div className="flex lg:w-[25%] justify-between md:w-[35%]">
               <button onClick={() => scrollToSection(aboutRef)}>About</button>
              <button onClick={() => scrollToSection(skillsRef)}>Skills</button>
              <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
              <button onClick={() => scrollToSection(contactRef)}>Contact Me!</button>
            </div>
          )}
          <div className="flex gap-5">
            <a
              target="blank"
              href="https://drive.google.com/file/d/1cT-KpOME4MJd6OwLvFCb8xOohPxaXQN_/view?usp=sharing"
              className="border-2  px-4 text-xs py-2 cursor-pointer rounded-xl hover:text-purple-600"
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
