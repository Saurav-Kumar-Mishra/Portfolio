import React from "react";
import MovingText from "./MovingText";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AppContext } from "./AppContextProvider";

function Hero() {
  const { darkMode, colorMode, aboutRef } = React.useContext(AppContext);
  const [imgSrc, setImgSrc] = React.useState("./sk.jpeg");
  function handleResize() {
    if (window.innerWidth >= 768) {
      darkMode ? setImgSrc("./skfull.jpeg") : setImgSrc("./sk1.jpeg");
    } 
    else 
   { setImgSrc("./sk.jpg");}
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [darkMode]);
  return (
    <div
      ref={aboutRef}
      style={colorMode}
      className="p-4 bg-[#000000] md:flex md:gap-5 md:justify-center  md:w-screen md:p-6 lg:w-screen w-[412px] lg:flex lg:justify-around lg:items-center"
    >
      <div
        className={`rounded-lg  ${
          darkMode
            ? "bg-gradient-to-b from-[#080808] to-[#06062d]"
            : "bg-gradient-to-b from-[#6fbfcf] to-[#ffffff]"
        }`}
      >
        <img
          className="rounded-[50%] lg:w-[600px] lg:rounded-[50%]  p-2 w-full "
          src={imgSrc}
          alt="failed to load profile pic"
        />
      </div>
      <div className="text-center mt-3 lg:w-[34%]">
        <p className="text-center text-2xl p-2 pb-0 font-bold lg:text-5xl md:text-xl">
          Saurav Kumar Mishra
        </p>
        <p className="text-pink-400 h-12 flex items-center font-sans md:flex md:items-baseline  md:h-fit lg:text-3xl lg:h-fit flex justify-center gap-4">
          <span>I'm </span>
          <MovingText />
        </p>
        <p className=" text-xl font-extrabold lg:mt-6 md:mt-4">About ME</p>
        <p className="text-justify mt-2 text-sm lg:text-lg">
          I'm a Btech CSE student and Passionate about crafting captivating
          digital experiences and driven by a relentless curiosity for
          innovative design and web development.
        </p>
        <div className="mt-4 flex flex-col item-center justify-center gap-5">
          <p className="font-bold">Follow Me On</p>
          <p className="text-2xl flex justify-center gap-4 lg:text-4xl">
            <a href="https://www.linkedin.com/in/sauravkrmishra">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/sauravkmishra?igsh=aWp4djZwaTMxMjJo">
              <FaSquareInstagram />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
