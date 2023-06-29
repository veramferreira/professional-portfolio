export default function Portfolio() {
  return (
    <section className="sticky-section bg-bright-yellow px-10 py-10" id="portfolio">
      <h2 className="font-poppins font-bold text-3xl text-deep-blue">portfolio</h2>
      <p className="text-deep-blue font-mono pt-10">Here are a few of my most recent projects</p>
      <div className="flex flex-wrap gap-10 py-10">
        <div className="w-full sm:w-1/3 lg:w-1/3mb-10">
            <h4 className=" text-deep-blue font-mono font-bold text-lg text-center py-5">Home Clinical Trials - WordPress</h4>
          <img src="./public/hct.png" alt="" className="rounded-lg object-cover w-full h-full" />
        </div>

        <div className="w-full sm:w-1/3 lg:w-1/3">
        <h4 className=" text-deep-blue font-mono font-bold text-lg text-center  py-5 mt-5">Clinic LordSaúde - WordPress</h4>
          <img src="./public/lordsaude.png" alt="" className="rounded-lg object-cover w-full h-full" />
        </div>
        <div className="w-full sm:w-1/3 lg:w-1/3">
        <h4 className=" text-deep-blue font-mono font-bold text-lg text-center  py-5 mt-5">Mindmoodpsychonutrition - WordPress</h4>

          <img src="./public/mindmood.png" alt="" className="rounded-lg object-cover w-full h-full" />
        </div>
        <div className="w-full sm:w-1/3 lg:w-1/3">
        <h4 className=" text-deep-blue font-mono font-bold text-lg text-center py-5 mt-5">LocaLink - Mobile App</h4>

          <img src="./public/localink.png" alt="" className="rounded-lg object-cover w-full h-full" />
        </div>
        <div className="w-full sm:w-1/3 lg:w-1/3 ">
        <h4 className=" text-deep-blue font-mono font-bold text-lg text-center  py-5 mt-5">Home Clinical Trials - Website</h4>

          <img src="./public/vnews.png" alt="" className="rounded-lg object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
}
