import React from "react";
import { Header } from "./Header";
import { Begin } from "./Begin";
import { Projects } from "./Projects";
import { Technologies } from "./Techonologies";
import { List } from "./List";
import { AboutMe } from "./AboutMe";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header/>
      <Begin />
      <Projects/>
      <Technologies/>
      <List/>
      <AboutMe/>
      <Footer/>
    </div>
    

  );
}

export default App;
