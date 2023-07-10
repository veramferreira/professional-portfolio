import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SectionPic from "./components/SectionPic";

function App() {
  return (
    <section id="app">
      <Navbar />
      <Header />
      <SectionPic />
      <div className=" relative z-10">
        
      <About />
      <Experience />
      <Portfolio />
      <Contact/>
      </div>
    </section>
  );
}

export default App;
