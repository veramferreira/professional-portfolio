import { FiGithub, FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section className="lg:sticky lg:top-0 bg-deep-blue px-10 pt-10 pb-20 mb-5" id="contact">
      <h2 className=" text-bright-yellow font-poppins font-bold text-3xl 2xl:text-4xl">
        let's connect
      </h2>
      <ul className="flex gap-4 sm:gap-8">
        <a
          className=" cursor-pointer rounded-lg shadow-sm p-4 mt-5 duration-200 bg-white bg-opacity-30 hover:bg-opacity-80 transition-all  text-bright-yellow hover:text-deep-blue"
          href="https://github.com/veramferreira"
          target="_blank"
        >
          <span className="text-xl sm:text-2xl md:text-3xl transition-all">
            <FiGithub />
          </span>
        </a>

        <a
          className=" cursor-pointer rounded-lg shadow-sm p-4 mt-5 duration-200 bg-white bg-opacity-30 hover:bg-opacity-80 transition-all  text-bright-yellow hover:text-deep-blue"
          href="https://www.linkedin.com/in/veraferreira-pt/"
          target="_blank"
        >
          <span className="text-xl sm:text-2xl md:text-3xl transition-all">
            <FiLinkedin />
          </span>
        </a>

        <a
          className=" cursor-pointer rounded-lg shadow-sm p-4 mt-5 duration-200 bg-white bg-opacity-30 hover:bg-opacity-80 transition-all  text-bright-yellow hover:text-deep-blue"
          href="mailto: verammferreira@gmail.com"
          target="_blank"
        >
          <span className="text-xl sm:text-2xl md:text-3xl transition-all">
            <HiOutlineMail />
          </span>
        </a>
      </ul>
      <div className=" flex justify-between mt-10">
        <p className=" font-mono mt-5 text-sm sm:text-base">
          designed and created by vera ferreira with ♥️
        </p>
        <p className=" font-mono mt-5 text-sm sm:text-base text-right">tech used: js | react | tailwind css</p>
      </div>
    </section>
  );
}
