import { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello world....");
  };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>

        <form onSubmit={HandleSubmit}>
          <input
            type={"text"}
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Enter your Color"
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </section>

      <section className="colors">
        <h3>Hello From Where...</h3>
      </section>
    </>
  );
}

export default App;
