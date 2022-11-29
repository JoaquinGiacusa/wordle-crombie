import React, { useEffect, useState } from "react";
import "./style.css";

type RowProps = {
  word: string;
  wordAttempt: string;
  checkWord: boolean;
};

const Row: React.FC<RowProps> = ({ word, wordAttempt, checkWord }) => {
  // const [checked, setChecked] = useState(checkWord);

  // useEffect(() => {
  //   if (checkWord) {
  //     setChecked(true);
  //   }
  // }, [checkWord]);

  return (
    <div className="row-wrapper">
      {word.split("").map((char, index) => {
        // console.log(wordAttempt.includes(char));
        return (
          <div
            className={
              char == wordAttempt[index] && checkWord
                ? "correct-place square"
                : word.includes(wordAttempt[index]) && checkWord
                ? "correct-letter square"
                : "square"
            }
            key={index}
          >
            {wordAttempt[index]}
          </div>
        );
      })}

      {/* <div className={correctPlace ? "correct-place square" : "square"}>
        {wordAttempt[0]}
      </div>
      <div className={correctPlace ? "correct-place square" : "square"}>
        {wordAttempt[1]}
      </div>{" "}
      <div className={correctPlace ? "correct-place square" : "square"}>
        {wordAttempt[2]}
      </div>{" "}
      <div className={correctPlace ? "correct-place square" : "square"}>
        {wordAttempt[3]}
      </div>{" "}
      <div className={correctPlace ? "correct-place square" : "square"}>
        {wordAttempt[4]}
      </div> */}
    </div>
  );
};

export default Row;
