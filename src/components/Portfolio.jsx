import { useState } from "react";
import { projectsData } from "../data/projects";
import Popup from "./Popup";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <section
      className="sticky-section bg-bright-yellow px-10 py-10"
      id="portfolio"
    >
      <h2 className="font-poppins font-bold text-3xl text-deep-blue">
        portfolio
      </h2>
      <p className="text-deep-blue font-mono pt-10">
        Here are a few of my most recent projects. Get to know more about the
        projects by clicking in the images.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10" onClick={togglePopup}>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all pb-10 mb-10 sm:mb-0 bg-white  dark:bg-ternary-dark">
          <h4 className=" text-deep-blue font-mono font-bold text-lg text-center px-4 py-6">
            LocaLink - Mobile App
          </h4>
          <img src="./public/localink.png" alt="" className=" border-none" />
          <div className="flex flex-wrap gap-3 justify-center mb-1 mt-10 px-4">
            {projectsData[0].techStack.map((tech) => (
              <img
                src={`./public/${tech.image}`}
                alt=""
                key={tech}
                className="w-10 h-10"
              />
            ))}
          </div>
        </div>
          {isOpen && <Popup
      content={<>
        <h2 className=" text-deep-blue font-poppins font-bold">{projectsData[0].title}</h2>
        <p  className=" text-deep-blue font-mono text-xs tracking-tighter my-5">{projectsData[0].description}</p>
        <div className=" flex justify-start gap-5">
          <a href={projectsData[0].appDemo} className=" bg-bright-pink px-5 py-3 rounded-lg text-deep-blue font-poppins text-xs font-bold shadow-md cursor-pointer hover:scale-105 transition-all">app demo</a>
          <a href={projectsData[0].appCode} className=" bg-bright-pink px-5 py-3 rounded-lg text-deep-blue font-poppins text-xs font-bold shadow-md cursor-pointer hover:scale-105 transition-all">app code</a>
        </div>
      </>}
      handleClose={togglePopup}
    />}

        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all pb-10 mb-10 sm:mb-0 bg-white  dark:bg-ternary-dark ">
          <h4 className=" text-deep-blue font-mono font-bold text-lg text-center  px-4 py-6">
            V News - Website
          </h4>
          <img src="./public/vnews.png" alt="" className=" border-none" />
          <div className="flex flex-wrap gap-3 justify-center mb-1 mt-10 px-4">
            {projectsData[1].techStack.map((tech) => (
              <img
                src={`./public/${tech.image}`}
                alt=""
                key={tech}
                className="w-10 h-10"
              />
            ))}
          </div>
        </div>
        {isOpen && <Popup
      content={<>
        <h2 className=" text-deep-blue font-poppins font-bold">{projectsData[1].title}</h2>
        <p  className=" text-deep-blue font-mono text-xs tracking-tighter my-5">{projectsData[1].description}</p>
        <div className=" flex justify-start gap-5">
          <a href={projectsData[1].appDemo} className=" bg-bright-pink px-5 py-3 rounded-lg text-deep-blue font-poppins text-xs font-bold shadow-md cursor-pointer hover:scale-105 transition-all">app demo</a>
          <a href={projectsData[1].appCode} className=" bg-bright-pink px-5 py-3 rounded-lg text-deep-blue font-poppins text-xs font-bold shadow-md cursor-pointer hover:scale-105 transition-all">app code</a>
        </div>
      </>}
      handleClose={togglePopup}
    />}

        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all pb-10 mb-10 sm:mb-0 bg-white dark:bg-ternary-dark">
          <h4 className=" text-deep-blue font-mono font-bold text-lg text-center px-4 py-6">
            Home Clinical Trials - WordPress
          </h4>
          <img src="./public/hct.png" alt="" className=" border-none" />
          <div className="flex flex-wrap gap-3 justify-center mb-1 mt-10 px-4">
            {projectsData[2].techStack.map((tech) => (
              <img
                src={`./public/${tech.image}`}
                alt=""
                key={tech}
                className="w-10 h-10"
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all pb-10 mb-10 sm:mb-0 bg-white dark:bg-ternary-dark">
          <h4 className=" text-deep-blue font-mono font-bold text-lg text-center  px-4 py-6">
            LordSaude Clinic
          </h4>
          <img src="./public/lordsaude.png" alt="" className=" border-none" />
          <div className="flex flex-wrap gap-3 justify-center mb-1 mt-10 px-4">
            {projectsData[3].techStack.map((tech) => (
              <img
                src={`./public/${tech.image}`}
                alt=""
                key={tech}
                className="w-10 h-10"
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all pb-10 mb-10 sm:mb-0 bg-white  dark:bg-ternary-dark">
          <h4 className=" text-deep-blue font-mono font-bold text-lg text-center  px-4 py-6">
            Mindmoodpsychonutrition
          </h4>

          <img src="./public/mindmood.png" alt="" className=" border-none" />
          <div className="flex flex-wrap gap-3 justify-center mb-1 mt-10 px-4">
            {projectsData[4].techStack.map((tech) => (
              <img
                src={`./public/${tech.image}`}
                alt=""
                key={tech}
                className="w-10 h-10"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
