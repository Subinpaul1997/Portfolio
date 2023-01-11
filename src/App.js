import React from "react";
import Content from "./components/content/Content";
import Topbar from "./components/topbar/Topbar";
import Skills from "./components/skills/Skills"
import Footer from "./components/footer/Footer"
import Projects from "./components/projects/Projects"
import "./app.css"

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Content/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
