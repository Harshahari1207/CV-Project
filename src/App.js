import "./App.css";
import { Footer } from "./components/Footer";
import { Left } from "./components/Left";
import { Right } from "./components/Right";
import React from "react";
import Instruction from "./components/Instruction";
function App() {
  return (
    <div className="App">
      <Instruction/>
      <div className="container">
        <Left />
        <Right />
      </div>
      <Footer />
    </div>
  );
}

export default App;
