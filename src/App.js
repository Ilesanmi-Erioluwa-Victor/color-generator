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
        <h2>Hello WOrld...</h2>
      </section>

      <section className="colors">
        <h3>Hello From Where...</h3>
      </section>
    </>
  );
}

export default App;
