import React from "react";
import "./styles.css";

export default function App() {
  return (
    <h1>
      <Smiley emoji={("😊", "😢")} isHappy="true" />
    </h1>
  );
}

export function Smiley({ emoji, isHappy }) {
  return (
    <h1>
      {isHappy ? "😊" : "😢"}
      {emoji}
    </h1>
  );
}
