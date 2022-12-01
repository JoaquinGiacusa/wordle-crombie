import React, { useEffect, useState } from "react";
import Row from "../row";
import "./style.css";

type BoardProps = {
  word: string;
  attemptCount: number;
  board: string[];
  usedLetters: {
    correct: string[];
    wrongPlace: string[];
    used: string[];
  };
};

const Board: React.FC<BoardProps> = ({
  word,
  attemptCount,
  board,
  usedLetters,
}) => {
  return (
    <div className="board-wrapper">
      {board.map((item, index) => {
        return (
          <Row
            key={index}
            word={word}
            checkWord={attemptCount > index ? true : false}
            wordAttempt={board[index]}
            usedLetters={usedLetters}
          ></Row>
        );
      })}
    </div>
  );
};

export default Board;
