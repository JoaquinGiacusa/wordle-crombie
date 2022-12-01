import React, { useEffect, useState } from "react";
import "./style.css";

type RowProps = {
  word: string;
  wordAttempt: string;
  checkWord: boolean;

  usedLetters: {
    correct: string[];
    wrongPlace: string[];
    used: string[];
  };
};

const Row: React.FC<RowProps> = ({
  word,
  wordAttempt,
  checkWord,
  usedLetters,
}) => {
  return (
    <div className="row-wrapper">
      {word.split("").map((char, index) => {
        return (
          <div
            className={
              usedLetters.correct.includes(wordAttempt[index]) &&
              char == wordAttempt[index] &&
              checkWord
                ? "correct-place square"
                : usedLetters.wrongPlace.includes(wordAttempt[index]) &&
                  checkWord
                ? "correct-letter square"
                : "square"
            }
            key={index}
          >
            {wordAttempt[index]}
          </div>
        );
      })}
    </div>
  );
};

export default Row;
