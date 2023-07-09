import React from "react";
import { Header } from "./Header";
import { Begin } from "./Begin";
import { Projects } from "./Projects";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header/>
      <Begin />
      <Projects/>
    </div>
    

  );
}

export default App;
