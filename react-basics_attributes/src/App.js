import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

export function Article() {
  return (
    <article className="article">
      <h2 className="article__title">my first h2</h2>
      <label htmlFor="article-input" className="article__label">
        Enter my fisrt lebel:
      </label>
      <input id="article-input" className="article__input" type="text" />
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/React_(web_framework)"
        target="_blank"
        rel="noopener noreferrer"
      >
        My first herf in react
      </a>
    </article>
  );
}
