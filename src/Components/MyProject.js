import React from 'react';
import { AppContext } from './AppContextProvider';
import ProjectCard from './ProjectCard'

function MyProject() {

  const {projectsRef,darkMode}=React.useContext(AppContext)
  return (
    <div className='w-screen md:w-screen lg:w-screen '>
    <div ref={projectsRef} className={`container ${darkMode? "text-black" :"text-black"} p-2 text-center mx-auto w-screen md:w-[768px] mt-8 `}>
      <p className="text-4xl mb-4   luckiest-guy-regular tracking-[10px] text-[#FFBD39] underline decoration-orange-500 underline-offset-8 decoration-8">My Projects</p>

      
      </div>
        <div className='w-screen space-y-4 lg:w-[700px] lg:h-[500px] mx-auto h-[350px] rounded-3xl bg-red-100 border-8 border-red-500 md:w-[550px] ' > 
        <ProjectCard/>
        </div>
    </div>
  );
}

export default MyProject;




