export default function About() {
  return (
    <section
      className="bg-bright-pink px-20 pt-10 max-sm:px-10 2xl:py-52 desktop:py-80"
      id="about"
    >
      <h2 className=" font-poppins font-bold text-3xl text-deep-blue 2xl:text-4xl desktop:text-5xl">about</h2>
      <p className=" text-deep-blue pt-10 normal-case font-mono 2xl:text-xl desktop:text-2xl desktop:pb-20">
        With a background in nursing, I bring a unique perspective to the
        world of software development. As a former nurse, I understand the
        importance of designing and creating intuitive, engaging, and accessible websites and web applications that prioritise the user's needs. I am excited to bring my skills in both frontend and backend development to a collaborative team environment, where I can continue to learn, grow, and contribute to a global company's success by building innovative, scalable, and efficient web applications that provide an excellent user experience.
      </p>
      <h3 className=" font-poppins font-bold text-2xl text-deep-blue pt-10 2xl:text-3xl">
        skills
      </h3>

      <div className="flex flex-wrap gap-3 justify-start  mt-10 pb-5" id="about--skills">
        <img src="html.png" alt="html logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="css3.png" alt="css logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="javascript.png" alt="javascript logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="typescript.png" alt="typescript logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="react.png" alt="react logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="tailwind-css.png" alt="tailwind css logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="firebase.png" alt="firebase logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="github.png" alt="github logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="git.png" alt="git logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="express.png" alt="express logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="npm.png" alt="npm logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="wordpress.png" alt="wordpress logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="shopify.png" alt="shopify logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="figma.png" alt="figma logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="adobe-photoshop.png" alt="photoshop logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="expo-go.png" alt="expo-go logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="jest.png" alt="jest logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
        <img src="psql.svg.png" alt="postgreSQL logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
      </div>

      <h3 className=" font-poppins font-bold text-2xl text-deep-blue pt-5 2xl:text-3xl">
        currently learning
      </h3>
      <div className="flex flex-wrap gap-3 justify-start  mt-10 pb-16" id="about--skills">
      <img src="php.png" alt="php logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
      <img src="laravel.png" alt="laravel logo" className=" w-20 h-20 bg-white border-8 rounded-md"/>
      </div>

    </section>
  );
}
