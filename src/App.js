import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);

  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function decreaseCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function resetCount() {
    setCount(0);
  }

  let color = count > 0 ? "green" : count < 0 ? "red" : "black";

  return (
    <div class="container">
      <h1>Counter</h1>
      <span style={{ color }} id="value">
        {count}
      </span>
      <div className="btn-group">
        <button className="btn btn-decrease" onClick={decreaseCount}>
          DECREASE
        </button>
        <button className="btn btn-reset" onClick={resetCount}>
          RESET
        </button>
        <button className="btn btn-increase" onClick={increaseCount}>
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default App;
