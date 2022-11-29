import React, { useState } from "react";
import "./App.css";
import Board from "./components/board";

import words from "./words.json";
const item = words[Math.floor(Math.random() * words.length)];

function App() {
  const [word, useWord] = useState(item);
  console.log(word);

  return (
    <div className="App">
      <Board word={word}></Board>
    </div>
  );
}

export default App;
