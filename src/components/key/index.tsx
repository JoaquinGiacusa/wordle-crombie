import React from "react";
import "./style.css";

const Key = ({ keyValue }: { keyValue: string }) => {
  return <div className={"key"}>{keyValue}</div>;
};

export default Key;
