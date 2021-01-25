import "./styles.css";
import Names from "./Names";
export default function App() {
  return (
    <div className="App">
      <div className = "heading">
      <h1>Select an account</h1>
      </div>
      <div id="listOfNames">
      <Names />
      </div>
    </div>
  );
}
