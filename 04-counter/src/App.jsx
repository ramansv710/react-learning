import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount(count + 1);
    console.log(count);
  };

  const removeValue = () => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <>
      <h1>React course</h1>
      <h1>{count}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
