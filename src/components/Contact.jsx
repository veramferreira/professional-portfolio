import { FiGithub, FiLinkedin } from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi'

export default function Contact() {
  return (
    <section className="sticky-section bg-deep-blue px-10 py-10"
    id="contact">
      <h2 className=" text-bright-yellow font-poppins font-bold text-3xl">
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
    </section>
  );
}
