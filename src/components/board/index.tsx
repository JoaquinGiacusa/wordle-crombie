import React, { useEffect, useState } from "react";
import Row from "../row";
import "./style.css";

type BoardProps = {
  word: string;
};

const Board: React.FC<BoardProps> = ({ word }) => {
  const [board, setBoard] = useState<string[]>(["", "", "", "", "", ""]);
  const [letterCurr, setLetterCurr] = useState("");
  const [attemptCount, setAttemptCount] = useState(0);
  const [usedLetters, setUsedLetters] = useState<string[]>([]);

  const keysTop = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keysMid = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"];
  const keysBot = ["Z", "X", "C", "V", "B", "N", "M"];

  const onEnter = () => {
    if (board[attemptCount].length != 5) return;

    setUsedLetters((prev) => {
      const newArray = [...prev];
      for (const letter of board[attemptCount]) {
        newArray.push(letter);
      }
      return newArray;
    });
    // console.log(usedLetters);

    if (word == board[attemptCount]) {
      setAttemptCount((prev) => prev + 1);
      window.alert("parablra correcta");
    } else {
      setAttemptCount((prev) => prev + 1);
      console.log("incorrecto");
    }
  };

  useEffect(() => {
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
      setLetterCurr("");
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
  }, [letterCurr]);

  const keyPress = (event: any) => {
    const key = event.key;
    if (
      keysTop.includes(key.toUpperCase()) ||
      keysMid.includes(key.toUpperCase()) ||
      keysBot.includes(key.toUpperCase()) ||
      key == "Enter" ||
      key == "Backspace"
    ) {
      setLetterCurr(key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress, false);

    return () => {
      document.removeEventListener("keydown", keyPress, false);
    };
  }, []);

  return (
    <div className="board-wrapper">
      {board.map((item, index) => {
        return (
          <Row
            key={index}
            word={word}
            checkWord={attemptCount > index ? true : false}
            wordAttempt={board[index]}
          ></Row>
        );
      })}
      <div className="keyboard">
        <div className="keyboard-line">
          {keysTop.map((item, index) => {
            // console.log(usedLetters.includes(item));
            // console.log(usedLetters);
            return (
              <div
                onClick={() => {
                  setLetterCurr(item.toLowerCase());
                }}
                key={index}
                className={
                  usedLetters.includes(item.toLowerCase()) &&
                  word.includes(item.toLowerCase())
                    ? "correct key"
                    : usedLetters.includes(item.toLowerCase())
                    ? "used key"
                    : "key"
                }
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="keyboard-line">
          {keysMid.map((item, index) => {
            return (
              <div
                onClick={() => {
                  setLetterCurr(item.toLowerCase());
                }}
                key={index}
                className={
                  usedLetters.includes(item.toLowerCase()) &&
                  word.includes(item.toLowerCase())
                    ? "correct key"
                    : usedLetters.includes(item.toLowerCase())
                    ? "wrong-place key"
                    : usedLetters.includes(item.toLowerCase())
                    ? "used key"
                    : "key"
                }
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="keyboard-line">
          {keysBot.map((item, index) => {
            return (
              <div
                onClick={() => {
                  setLetterCurr(item.toLowerCase());
                }}
                key={index}
                className={
                  usedLetters.includes(item.toLowerCase()) &&
                  word.includes(item.toLowerCase())
                    ? "correct key"
                    : usedLetters.includes(item.toLowerCase())
                    ? "used key"
                    : "key"
                }
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
