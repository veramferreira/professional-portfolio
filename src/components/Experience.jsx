export default function Experience() {
  return (
    <section
      className=" sticky-section bg-deep-blue px-10 py-10 pb-20 mt-20"
      id="experience" 
    >
      <h2 className=" font-poppins font-bold text-3xl text-bright-yellow">
        experience
      </h2>
      <div className=" mt-10">
        <ol className="relative border-l border-gray-200 font-mono text-bright-yellow">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none ">
              March 2023
            </time>
            <h3 className="text-lg font-semibold text-bright-pink">
            Junior Software Developer Student
            </h3>
            <p className="mb-4 text-base font-normal ">
            Successfully completed a 13-week software development bootcamp, covering full-stack web development with JavaScript, Node.js, React, and PSQL
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none ">
              November 2019
            </time>
            <h3 className="text-lg font-semibold text-bright-pink">
              Freelancer Web Designer/Developer
            </h3>
            <p className="text-base font-normal ">
            Solidified client's online presence by creating and designing WordPress and Shopify websites with simple yet engaging designs and interactive, accessible and responsive interfaces
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none ">
              March 2012 - November 2019
            </time>
            <h3 className="text-lg font-semibold text-bright-pink">
              Operating Theatres & Women's Health Nurse
            </h3>
            <p className="text-base font-normal ">
            Worked as a full-time and agency nurse in operating theatres and women's health, developing crucial skills in communication, organisation, empathy, leadership, and self- confidence. I've also mentored junior nurses and assisted in the training and onboarding of new staff members.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
