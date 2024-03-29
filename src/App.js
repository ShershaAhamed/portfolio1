import React, { useState } from "react";
import About from "./components/about/About";
import Achievement from "./components/achievement/Achievement";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
import Skills from "./components/skill/Skills";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div onTouchMove={() => setOpen(false)}>
      <Navbar open={open} setOpen={setOpen} />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;

