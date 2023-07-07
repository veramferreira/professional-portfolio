export default function Header() {
  return (
    <div className=" pl-20" id="header">
      <section className="px-10 pt-40">
        <h1
          className=" font-poppins font-extrabold text-7xl text-bright-pink"
          id="header--h1"
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
