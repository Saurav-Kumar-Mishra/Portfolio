import React from "react";
import MovingText from "./MovingText";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { AppContext } from "./AppContextProvider";

import "./Hero.css";

function Hero() {
  const { darkMode, aboutRef } = React.useContext(AppContext);

  return (
    <div ref={aboutRef} className={`container mx-auto p-4 `}>
      <div className="Hero-container flex flex-col  md:flex-row md:justify-center md:items-center md:gap-16 lg:h-screen lg:justify-evenly pt-20">
        <div className="Left-Hero-Section w-full md:w-1/2 lg:w-1/3 mx-auto">
          <div className="blue-shadow mt-4 mb-10 mx-auto w-full max-w-xs lg:max-w-sm relative ">
            <img
              src="sk1.png"
              alt="designer"
              className="rounded-2xl w-[95%] bg-hero-pattern bg-cover  blue-shadow  animate-zoom1"
            />
            <img src="design.png" className="absolute  -top-20 -z-10 lg:animate-zoom2 md:w-[350px] "  alt="pic bg "/>
          </div>
        </div>
        <div className="Right-Hero-Section p-2 flex flex-col gap-5 w-full md:w-1/2 lg:w-1/2">
          <div className="Headings">
            <div className="text-xl text-[#FFBD39] font-bold concert-one-regular lg:text-xl">
              HELLO!
            </div>
            <h1 className="text-3xl bg-gradient-to-r from-violet-50 to-fuchsia-500 bg-clip-text text-transparent font-bold  lg:text-5xl">
              <span className={` text-md ${darkMode?"text-black":"text-white"}`}>I'm </span>
              <span className="text-[#FFBD39]"> Saurav </span>
              <p className="text-[#FFBD39]">Mishra</p>
            </h1>
            <h4 className="flex gap-4 items-center h-[30px] mt-2 lg:mt-8">
              <MovingText />
            </h4>
          </div>
          <div className="About-Me mt-5 text-white  text-justify pr-2 a fadeIn">
            <p className="text-[#FFBD39] poppins-regular-italic lg:text-[18px]">
              Aspiring Full Stack Developer | Computer Science Student at MAIT
            </p>   
            <p className={`poppins-thin ${darkMode?"text-black poppins-regular" : "text-white"}`}>
              Passionate about building dynamic and responsive web applications.
              Currently honing my skills in both front-end and back-end
              technologies to create seamless and user-friendly digital
              experiences. Explore my projects and get in touch to collaborate
              on innovative solutions!
            </p>
          </div>
          <div className="Social-Media-Handles flex justify-start gap-5 mt-5">
            <a
              className="lg:text-5xl md:text-3xl text-2xl bounce rounded-full"
              href="https://www.linkedin.com/in/sauravkrmishra"
            >
              <FaLinkedin />
            </a>
            <a
              className="lg:text-5xl md:text-3xl text-2xl bounce rounded-full"
              href="https://www.instagram.com/sauravkmishra?igsh=aWp4djZwaTMxMjJo"
            >
              <FaSquareInstagram />
            </a>
            <a
              className="lg:text-5xl md:text-3xl text-2xl bounce rounded-full"
              href="https://t.me/SauravKrMishra"
            >
              <FaTelegram />
            </a>
            <a
              className="lg:text-5xl md:text-3xl text-2xl bounce rounded-full"
              href="https://github.com/Saurav-Kumar-Mishra"
            >
              <FaGithub />
            </a>
            <a
              className="lg:text-5xl md:text-3xl text-2xl bounce rounded-full"
              href="https://www.twitter.com/ImSauravKMishra"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
