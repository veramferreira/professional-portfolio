import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SectionPic from "./components/SectionPic";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <SectionPic />
      <About />
      <Experience />
    </>
  );
}

export default App;
