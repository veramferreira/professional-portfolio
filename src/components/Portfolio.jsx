import { useState } from "react";
import { projectsData } from "../data/projects";
import Popup from "./Popup";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);


  const togglePopup = (projectIndex) => {
    setSelectedProjectIndex(projectIndex)
    setIsOpen(!isOpen);
  }

  return (
    <section
      className=" bg-bright-yellow px-20 py-10 max-sm:px-10 2xl:py-52"
      id="portfolio"
    >
      <h2 className="font-poppins font-bold text-3xl text-deep-blue 2xl:text-4xl">
        portfolio
      </h2>
      <p className="text-deep-blue font-mono pt-10 2xl:text-xl">
        Here are a few of my most recent projects. Get to know more about the
        projects by clicking in the images.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 " >
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all pb-10 mb-10 sm:mb-0 bg-white  dark:bg-ternary-dark" onClick={() => togglePopup(0)}>
          <h4 className=" text-deep-blue font-mono font-bold text-lg text-center px-4 py-6">
            LocaLink - Mobile App
          </h4>
          <img src="localink.png" alt="" className="border-none object-cover w-full h-64" />
          <div className="flex flex-wrap gap-3 justify-center mb-1 mt-10 px-4">
            {projectsData[0].techStack.map((tech) => (
              <img
                src={`${tech.image}`}
                alt=""
                key={tech.id}
                className="w-10 h-10"
              />
            ))}
          </div>
        </div>
          {isOpen && selectedProjectIndex !== null && <Popup
      content={selectedProjectIndex}
      handleClose={togglePopup}
    />}

        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all pb-10 mb-10 sm:mb-0 bg-white  dark:bg-ternary-dark " onClick={() => togglePopup(1)}>
          <h4 className=" text-deep-blue font-mono font-bold text-lg text-center  px-4 py-6">
            V News - Website
          </h4>
          <img src="vnews.png" alt="" className="border-none object-cover w-full h-64" />
          <div className="flex flex-wrap gap-3 justify-center mb-1 mt-10 px-4">
            {projectsData[1].techStack.map((tech) => (
              <img
                src={`${tech.image}`}
                alt=""
                key={tech.id}
                className="w-10 h-10"
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all pb-10 mb-10 sm:mb-0 bg-white dark:bg-ternary-dark" onClick={() => togglePopup(2)}>
          <h4 className=" text-deep-blue font-mono font-bold text-lg text-center px-4 py-6">
            Home Clinical Trials - WordPress
          </h4>
          <img src="hct.png" alt="" className="border-none object-cover w-full h-64" />
          <div className="flex flex-wrap gap-3 justify-center mb-1 mt-10 px-4">
            {projectsData[2].techStack.map((tech) => (
              <img
                src={`${tech.image}`}
                alt=""
                key={tech.id}
                className="w-10 h-10"
              />
            ))}
          </div>
        </div>
        

        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all pb-10 mb-10 sm:mb-0 bg-white dark:bg-ternary-dark" onClick={() => togglePopup(3)}>
          <h4 className=" text-deep-blue font-mono font-bold text-lg text-center  px-4 py-6">
            LordSaude Clinic
          </h4>
          <img src="lordsaude.png" alt="" className="border-none object-cover w-full h-64" />
          <div className="flex flex-wrap gap-3 justify-center mb-1 mt-10 px-4">
            {projectsData[3].techStack.map((tech) => (
              <img
                src={`${tech.image}`}
                alt=""
                key={tech.id}
                className="w-10 h-10"
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all pb-10 mb-10 sm:mb-0 bg-white dark:bg-ternary-dark" onClick={() => togglePopup(4)}>
          <h4 className=" text-deep-blue font-mono font-bold text-lg text-center  px-4 py-6">
            Mindmoodpsychonutrition
          </h4>

          <img src="mindmood.png" alt="" className="border-none object-cover w-full h-64" />
          <div className="flex flex-wrap gap-3 justify-center mb-1 mt-10 px-4">
            {projectsData[4].techStack.map((tech) => (
              <img
                src={`${tech.image}`}
                alt=""
                key={tech.id}
                className="w-10 h-10"
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all pb-10 mb-10 sm:mb-0 bg-white dark:bg-ternary-dark" onClick={() => togglePopup(5)}>
          <h4 className=" text-deep-blue font-mono font-bold text-lg text-center  px-4 py-6">
          Dynamic Viewport Grid
          </h4>

          <img src="grid.gif" alt="" className="border-none object-cover w-full h-64" />
          <div className="flex flex-wrap gap-3 justify-center mb-1 mt-10 px-4">
            {projectsData[5].techStack.map((tech) => (
              <img
                src={`${tech.image}`}
                alt=""
                key={tech.id}
                className="w-10 h-10"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
