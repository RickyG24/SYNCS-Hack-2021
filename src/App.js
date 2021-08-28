import './App.css';
import { useState } from "react";

function App() {
  const [items, setItems] = useState(["Placeholder"]);

  const addItem = (itemToAdd) => {
    setItems([itemToAdd]);
  }  

  const [inputValue, setInputValue] = useState("");



  return (
    <div className="App">
      <div>
        <h1>Push Your Gov</h1>
        <p>Please fill in your residential address below</p>
          <form></form>
        <input onChange={(event) => setInputValue(event.target.value)} ></input>
        <button onClick={() => addItem(inputValue)}>Submit</button>
      </div>
    </div>

  );
}

export default App;
