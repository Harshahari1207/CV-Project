import "./App.css";
import { Left } from "./components/Left";
import { Right } from "./components/Right";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
