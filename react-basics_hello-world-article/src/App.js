import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

export function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello every body</h1>
      <p>my first react paragraph</p>
    </article>
  );
}
