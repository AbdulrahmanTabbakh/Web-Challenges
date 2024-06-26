import React from "react";
import "./styles.css";

export default function App() {
  return (
    <h1>
      <Sum valueA={2} valueB={3} />
    </h1>
  );
}

export function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <h1>
      {valueA} + {valueB} = {sum}
    </h1>
  );
}
