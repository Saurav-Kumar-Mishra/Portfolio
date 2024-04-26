import React from "react";
import { AppContext } from "./AppContextProvider";

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
    { name: "DSA", imageUrl: "dsa.jpeg" },
    { name: "C++", imageUrl: "cpp.jpeg" },
    { name: "Java", imageUrl: "java.jpeg" },
    { name: "Python", imageUrl: "python.jpeg" },
  ];
  const { colorMode } = React.useContext(AppContext);
  return (
    <div style={colorMode} className="container mx-auto text-center w-full max-w-[768px]">
      <p className="p-4 font-mono font-bold text-pink-400 text-2xl">My Skills</p>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="text-center">
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className="mx-auto mb-2"
              style={{ maxWidth: "50px" }}
            />
            <p className="text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillComponent;
