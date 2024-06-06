import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(step);
  const divStyle = {
    margin: "auto",
    width: "500px",
    padding: "15px",
    alignItems: "center",
  };
  const date = new Date();
  date.setDate(date.getDate() + count);
  //const buttonStyle = { marginRight: "10px", display: "inline-block" };
  function handleReset() {
    setStep(0);
    setCount(0);
  }
  return (
    <div style={divStyle}>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(event) => setStep(event.target.valueAsNumber)}
        ></input>
        <span>{step}</span>
      </div>
      {/* <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>
          {"  "}step:{step}
        </span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div> */}
      <div>
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <input type="text" readOnly value={count}></input>
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
