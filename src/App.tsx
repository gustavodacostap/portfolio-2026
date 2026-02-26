import React from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import IntroAnimation from "./components/IntroAnimation";
import Experience from "./sections/Experience";

export default function App() {
  const [introDone, setIntroDone] = React.useState(false);

  return (
    <div className="relative gradient text-white">
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />

      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
    </div>
  );
}
