import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SectionPic from "./components/SectionPic";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <SectionPic />
      <About />
      <Experience />
      <Portfolio />
      <Contact/>
    </>
  );
}

export default App;
