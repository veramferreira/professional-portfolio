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
            <span className="close-icon font-poppins" onClick={handleCloseClick}>x</span>
            <>
              <h2 className="text-deep-blue font-poppins font-bold text-xl">{projectData.title}</h2>
              <h4 className="text-deep-blue font-poppins text-sm">{projectData.category}</h4>
              <img src={projectData.img} alt={`${projectData.title} app screenshot`} className=" py-5 rounded-lg" />
              <p className="text-deep-blue font-mono text-xs tracking-tighter mb-5">{projectData.description}</p>
              <div className="flex justify-start gap-5">
                <a target="_blank" href={projectData.appDemo} className="bg-bright-pink px-5 py-3 rounded-lg text-deep-blue font-poppins text-xs font-bold shadow-md cursor-pointer hover:scale-105 transition-all">app demo</a>
                <a target="_blank" href={projectData.appCode} className="bg-bright-pink px-5 py-3 rounded-lg text-deep-blue font-poppins text-xs font-bold shadow-md cursor-pointer hover:scale-105 transition-all">app code</a>
              </div>
            </>
          </div>
        </div>
      );
}