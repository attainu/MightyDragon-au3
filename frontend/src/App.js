import React from "react";
import { createStore } from "redux";
import Generation from "./components/Generation";
import Dragon from "./components/Dragon";
import "./App.css";

const DEFAULT_GENERATION = { generationId: "", expiration: "" };

const generationReducer = () => {
  return {
    generation: DEFAULT_GENERATION
  };
};
const store = createStore(generationReducer);

console.log('store', store);
console.log('store.getState()',store.getState());

function App() {
  return (
    <div className="App">
      <h2>Dragon Stack from React</h2>
      <Generation />
      <Dragon />
    </div>
  );
}

export default App;
