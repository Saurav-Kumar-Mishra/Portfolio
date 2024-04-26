import React from 'react';
import { AppContext } from './AppContextProvider';

function MyProject() {

  const projects = [
    { title: 'Weather App', imageUrl: 'weather.png',link:"https://sauravweatherapp.netlify.app/" },
    { title: 'Meme Generator App', imageUrl: 'meme.png' ,link:"https://sauravmemegenerator.netlify.app/"},
    { title: 'FakeStore App', imageUrl: 'fakestore.png' ,link:"https://sauravfakestore.netlify.app/" },
    { title: 'Blogging App', imageUrl: 'blogging.png' }
  
  ];

  const {projectsRef,darkMode}=React.useContext(AppContext)
  return (
    <div ref={projectsRef} className={`container ${darkMode? "text-black" :"text-black"} p-2 text-center  mx-auto w-screen md:w-[768px] `}>
      <p className="text-2xl font-bold mb-4 text-pink-400 font-mono ">My Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <a href={project.link} target='blank'>
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4 bg-slate-400">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            </div>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default MyProject;
