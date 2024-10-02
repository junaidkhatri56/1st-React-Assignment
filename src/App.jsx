import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  function addCounter() {
    setCount(count + 1);
  }

  function lessCounter() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="app-container">
      <div className="counter-box">
        <h1 className="counter-text">Hello World {count}</h1>
        <div className="button-group">
          <button className="button add-button" onClick={addCounter}>
            Add Counter
          </button>
          <button className="button less-button" onClick={lessCounter}>
            Less Counter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
