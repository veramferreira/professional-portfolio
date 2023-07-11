import { projectsData } from "../data/projects";

export default function Popup(props) {
  const { content, handleClose } = props;

  const projectData = projectsData[content];

  const handleCloseClick = () => {
    handleClose();
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon font-poppins" onClick={handleCloseClick}>
          x
        </span>
        <div className=" px-12 py-10">
          <h2 className="text-deep-blue font-poppins font-bold text-xl 2xl:text-3xl">
            {projectData.title}
          </h2>
          <h4 className="text-deep-blue font-poppins text-sm 2xl:text-xl pb-5">
            {projectData.category}
          </h4>
          <img
            src={projectData.img}
            alt={`${projectData.title} app screenshot`}
            className=" py-5 rounded-lg"
          />
          <p className="text-deep-blue font-mono text-sm tracking-tighter py-5 mb-5 2xl:text-xl">
            {projectData.description}
          </p>
          <div className="flex justify-start gap-5">
            <a
              target="_blank"
              href={projectData.appDemo}
              className="bg-bright-pink px-5 py-3 rounded-lg text-deep-blue font-poppins text-xs font-bold shadow-md cursor-pointer hover:scale-105 transition-all 2xl:text-lg"
            >
              app demo
            </a>
            <a
              target="_blank"
              href={projectData.appCode}
              className="bg-bright-pink px-5 py-3 rounded-lg text-deep-blue font-poppins text-xs font-bold shadow-md cursor-pointer hover:scale-105 transition-all 2xl:text-lg"
            >
              app code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
