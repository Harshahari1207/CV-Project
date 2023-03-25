import "./App.css";
import { Footer } from "./components/Footer";
import { Left } from "./components/Left";
import { Right } from "./components/Right";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Left />
        <Right />
      </div>
      <Footer />
    </div>
  );
}

export default App;
