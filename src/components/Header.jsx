export default function Header() {
    return (
      <div>
        <section className="px-10 pt-10">
          <h1 className=" font-poppins font-extrabold text-7xl text-bright-pink">vera ferreira</h1>
          <h2 className=" font-poppins text-4xl tracking-wide text-bright-pink/80">i build things on the web</h2>
        </section>
        <section className="px-10 pt-5 font-mono text-bright-pink/80 text-lg">
          <p>👩‍⚕️ nurse-turned-software developer</p>
          <p>🎨 passionate about design and user experience</p>
          <p>📺 entertainment aficionada</p>
          <p>🇵🇹 portuguese living in the UK 🇬🇧</p>
        </section>
        <section className="px-10 pt-10">
            <button className=" font-bold font-mono bg-deep-blue border-bright-yellow text-bright-yellow transition-all ease-in duration-300 hover:scale-105 hover:bg-bright-yellow hover:text-deep-blue">let's work together</button>
        </section>
      </div>
    );
  }
  