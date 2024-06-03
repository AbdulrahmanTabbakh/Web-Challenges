import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Press me!</Button>
      <Button>Press me!</Button>
      <Button>press me!</Button>
      <Button>Press me!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <div>
      <button className="button" type="button">
        {children}
      </button>
    </div>
  );
}
