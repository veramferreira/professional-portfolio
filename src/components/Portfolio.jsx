export default function Portfolio() {
  return (
    <section
      className="sticky-section bg-bright-yellow px-10 py-10"
      id="portfolio"
    >
      <h2 className="font-poppins font-bold text-3xl text-deep-blue">
        portfolio
      </h2>
      <p className="text-deep-blue font-mono pt-10">
        Here are a few of my most recent projects. Get to know more about the projects by clicking in the images. 
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer pb-10 mb-10 sm:mb-0 bg-white  dark:bg-ternary-dark">
          <h4 className=" text-deep-blue font-mono font-bold text-lg text-center px-4 py-6">
            LocaLink - Mobile App
          </h4>

          <img src="./public/localink.png" alt="" className=" border-none" />
        </div>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer pb-10 mb-10 sm:mb-0 bg-white  dark:bg-ternary-dark ">
          <h4 className=" text-deep-blue font-mono font-bold text-lg text-center  px-4 py-6">
            V News - Website
          </h4>

          <img src="./public/vnews.png" alt="" className=" border-none" />
        </div>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer pb-10 mb-10 sm:mb-0 bg-white dark:bg-ternary-dark">
          <h4 className=" text-deep-blue font-mono font-bold text-lg text-center px-4 py-6">
            Home Clinical Trials - WordPress
          </h4>
          <img src="./public/hct.png" alt="" className=" border-none" />
        </div>

        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer pb-10 mb-10 sm:mb-0 bg-white dark:bg-ternary-dark">
          <h4 className=" text-deep-blue font-mono font-bold text-lg text-center  px-4 py-6">
            LordSaude Clinic - WordPress
          </h4>
          <img src="./public/lordsaude.png" alt="" className=" border-none" />
        </div>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer pb-10 mb-10 sm:mb-0 bg-white  dark:bg-ternary-dark">
          <h4 className=" text-deep-blue font-mono font-bold text-lg text-center  px-4 py-6">
            Mindmoodpsychonutrition - WordPress
          </h4>

          <img src="./public/mindmood.png" alt="" className=" border-none" />
        </div>
      </div>
    </section>
  );
}
