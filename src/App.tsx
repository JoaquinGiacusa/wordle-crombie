import React, { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/board";
import Keyboard from "./components/keyboard";
import Rules from "./components/rules";
import words from "./words.json";

const item = words[Math.floor(Math.random() * words.length)];

function App() {
  const [word, useWord] = useState(item);
  // console.log(word);
  const [board, setBoard] = useState<string[]>(["", "", "", "", "", ""]);
  const [letterCurr, setLetterCurr] = useState<string>("");
  const [attemptCount, setAttemptCount] = useState(0);
  const [usedLetters, setUsedLetters] = useState<{
    correct: string[];
    wrongPlace: string[];
    used: string[];
  }>({ correct: [], wrongPlace: [], used: [] });
  const onEnter = () => {
    if (board[attemptCount].length != 5) return;
    if (!words.includes(board[attemptCount])) {
      window.alert("La palabra no está en la lista.");
      return;
    }

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (char == board[attemptCount][i]) {
        setUsedLetters((prev) => {
          const newArray = { ...prev };
          newArray.correct.push(board[attemptCount][i]);
          return newArray;
        });
      } else if (word.includes(board[attemptCount][i])) {
        setUsedLetters((prev) => {
          const newArray = { ...prev };
          newArray.wrongPlace.push(board[attemptCount][i]);
          return newArray;
        });
      } else if (!word.includes(board[attemptCount][i])) {
        setUsedLetters((prev) => {
          const newArray = { ...prev };
          newArray.used.push(board[attemptCount][i]);
          return newArray;
        });
      }
    }

    if (word == board[attemptCount]) {
      setAttemptCount(6);
      window.alert("Palabra Correcta!");
    } else {
      setAttemptCount((prev) => prev + 1);
      if (attemptCount >= 5) {
        window.alert(`Perdiste :(`);
      }
    }
  };

  useEffect(() => {
    if (attemptCount > 5) return;
    if (letterCurr == "Enter") {
      onEnter();
    }

    if (letterCurr == "Backspace") {
      setBoard((prev) => {
        const newArray = [...prev];
        newArray[attemptCount] = newArray[attemptCount].slice(
          0,
          newArray[attemptCount].length - 1
        );

        return newArray;
      });
      // setLetterCurr("");
    }

    if (
      letterCurr !== "Enter" &&
      letterCurr !== "Backspace" &&
      board[attemptCount].length < 5
    ) {
      setBoard((prev) => {
        const newArray = [...prev];

        newArray[attemptCount] = newArray[attemptCount] += letterCurr;
        return newArray;
      });
    }
    setLetterCurr("");
  }, [letterCurr]);

  const keyPress = (event: any) => {
    const key = event.key;

    if (
      "qwertyuiopasdfghjklñzxcvbnm".includes(key.toLowerCase()) ||
      key == "Enter" ||
      key == "Backspace"
    ) {
      setLetterCurr(key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);

    return () => {
      document.removeEventListener("keydown", keyPress);
    };
  }, []);

  return (
    <div className="App">
      <h1 className="title">Wordle</h1>
      <Board
        word={word}
        board={board}
        attemptCount={attemptCount}
        usedLetters={usedLetters}
      ></Board>
      <Keyboard
        onEnter={() => onEnter()}
        onDelete={() => setLetterCurr("Backspace")}
        addLetterFromKeyBoard={(letter) => setLetterCurr(letter)}
        usedLetters={usedLetters}
      ></Keyboard>
    </div>
  );
}

export default App;
