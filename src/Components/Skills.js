import React from "react";
import { AppContext } from "./AppContextProvider";
import "./skills.css";

function SkillComponent() {
  const skills = [
    { name: "HTML", imageUrl: "html.jpeg" },
    { name: "CSS", imageUrl: "css.jpeg" },
    { name: "Tailwind CSS", imageUrl: "tailwind.jpeg" },
    { name: "JavaScript", imageUrl: "js.jpeg" },
    { name: "React JS", imageUrl: "react.jpeg" },
    { name: "Express JS", imageUrl: "express.jpeg" },
    { name: "MongoDB", imageUrl: "mongo.jpeg" },
    { name: "Node.js", imageUrl: "node.jpeg" },
    { name: "Redux", imageUrl: "redux.jpg" },
    { name: "C++", imageUrl: "cpp.jpeg" },
    { name: "Java", imageUrl: "java.jpeg" },
    { name: "Python", imageUrl: "python.jpeg" },
  ];
  const { colorMode, skillsRef } = React.useContext(AppContext);
  return (
    <div style={colorMode} ref={skillsRef} className="md:min-h-[400px] mt-16">
      <div className="flex justify-center gap-4 items-center">
        <h1 className="text-[#FFBD39] text-4xl text-center tracking-widest luckiest-guy-regular underline decoration-orange-500 underline-offset-8 decoration-8">
          My skills
        </h1>
        <img src="rocket.gif" alt="icon" width="40px" className="rounded-xl" />
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center mt-6">
        <div className="hidden lg:block relative w-[500px]">
          <div className="skill-img-background absolute w-[50px] h-[50px]"></div>
          <img src="skillFile.png" className="w-[500px]" alt="skillImg" />
        </div>
        <div
          style={colorMode}
          className="container text-center w-full max-w-[768px] p-4"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center justify-center rounded-3xl bg-cyan-100 p-4"
              >
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="mb-2 rounded-full object-cover hover:animate-spin hover:drop-shadow-[0_0px_0.75rem_crimson]"
                  style={{ maxWidth: "70px" }}
                />
                <p className="text-sm text-black font-bold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillComponent;
