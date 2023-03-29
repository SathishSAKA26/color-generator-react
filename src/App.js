import React, { useState } from "react";

import "./App.css";

import Color from "./components/Color";

import Values from "values.js";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  // Functions
  const submitHandler = function (e) {
    e.preventDefault();

    // try catch black
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <main>
      <section className="main-container">
        <h2 className="title">Color Generator</h2>
        <form onSubmit={submitHandler} className="input-container">
          <input
            type="text"
            value={color}
            placeholder="#32fe55"
            name="color"
            onChange={(e) => setColor(e.target.value)}
            className="input"
          />

          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((color, index) => {
          return <Color key={index} {...color} index={index} />;
        })}
      </section>
    </main>
  );
};

export default App;
