import SplitType from "split-type";
import { gsap } from "gsap";

export default function Header() {
  const text = new SplitType("#header--h1");

  const characters = document.getElementsByClassName("char");

  for (let i = 0; i < characters.length; i++) {
    characters[i].classList.add("translate-y-full");
  }

  gsap.to(".char", {
    y: 0,
    stagger: 0.05,
    delay: 0.02,
    duration: 0.5,
  });

  return (
    <div className=" pl-20" id="header">
      <section className="px-10 pt-40">
        <h1
          className=" font-poppins font-extrabold text-7xl text-bright-pink"
          id="header--h1"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          vera ferreira
        </h1>
        <h2
          className=" font-poppins text-4xl tracking-wide text-bright-pink/80"
          id="header--h2"
        >
          i build things on the web
        </h2>
      </section>
      <section className="px-10 pt-5 font-mono text-bright-pink/80 text-lg">
        <p>👩‍⚕️ nurse-turned-software developer</p>
        <p>🎨 passionate about design and user experience</p>
        <p>📺 entertainment aficionada</p>
        <p>🇵🇹 portuguese living in the UK 🇬🇧</p>
      </section>
      <section className="px-10 pt-10 pb-40 ">
        <a
          href="#contact"
          className=" font-bold font-mono text-sm  text-bright-yellow transition-all ease-in duration-300 hover:bg-bright-yellow hover:text-deep-blue px-5 py-2 border rounded-lg hover:scale-105"
        >
          let's work together
        </a>
      </section>
    </div>
  );
}
