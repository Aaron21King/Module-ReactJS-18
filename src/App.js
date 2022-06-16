import { useState } from "react";
import "./App.css";

//Components
import Title from "./components/Title";
import FullName from "./components/FullName";

function App() {
  const [count, setCount] = useState(0);
  console.log(count, "COUNT");
  console.log(setCount, "SET_COUNT");

  const handleClick = (increase) => {
    let newCount = count;
    if (increase) {
      newCount = newCount + 1;
    } else {
      newCount = newCount - 1;
    }
    setCount(newCount);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Title text="Aaron"></Title>
        <FullName firstName="Aaron Armando" lastName="Enciso Guzman"></FullName>
        <p>Counter: {count}</p>
        <button onClick={() => handleClick(true)}>Increase</button>
        <button onClick={() => handleClick(false)}>Decrease</button>
      </header>
    </div>
  );
}

export default App;
