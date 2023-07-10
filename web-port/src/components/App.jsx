import React from "react";
import { Header } from "./Header";
import { Begin } from "./Begin";
import { Projects } from "./Projects";
import { Technologies } from "./Techonologies";
function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header/>
      <Begin />
      <Projects/>
      <Technologies/>
    </div>
    

  );
}

export default App;
