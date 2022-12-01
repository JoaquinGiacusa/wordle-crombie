import React from "react";
import DeleteIcon from "../icons/delete";
import "./style.css";

type KeyboardProps = {
  usedLetters: {
    correct: string[];
    wrongPlace: string[];
    used: string[];
  };
  addLetterFromKeyBoard: (letter: string) => void;
  onEnter: () => void;
  onDelete: () => void;
};

const Keyboard: React.FC<KeyboardProps> = ({
  usedLetters,
  addLetterFromKeyBoard,
  onEnter,
  onDelete,
}) => {
  const keysTop = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keysMid = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"];
  const keysBot = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      <div className="keyboard-line">
        {keysTop.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => addLetterFromKeyBoard(item.toLowerCase())}
              className={
                usedLetters.correct.includes(item.toLowerCase())
                  ? "correct key"
                  : usedLetters.wrongPlace.includes(item.toLowerCase())
                  ? "wrong-place key"
                  : usedLetters.used.includes(item.toLowerCase())
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
              key={index}
              onClick={() => addLetterFromKeyBoard(item.toLowerCase())}
              className={
                usedLetters.correct.includes(item.toLowerCase())
                  ? "correct key"
                  : usedLetters.wrongPlace.includes(item.toLowerCase())
                  ? "wrong-place key"
                  : usedLetters.used.includes(item.toLowerCase())
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
        <button onClick={() => onEnter()} className="enter-btn key">
          Enviar
        </button>
        {keysBot.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => addLetterFromKeyBoard(item.toLowerCase())}
              className={
                usedLetters.correct.includes(item.toLowerCase())
                  ? "correct key"
                  : usedLetters.wrongPlace.includes(item.toLowerCase())
                  ? "wrong-place key"
                  : usedLetters.used.includes(item.toLowerCase())
                  ? "used key"
                  : "key"
              }
            >
              {item}
            </div>
          );
        })}
        <button onClick={() => onDelete()} className="delete-btn key">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
