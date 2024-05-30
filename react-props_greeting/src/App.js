import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name=" Abdul " isCoach="Andrea" />
    </div>
  );
}

export function Greeting({ name, isCoach }) {
  return (
    <div>
      {isCoach ? "Hello, Coach!" : name} {name}
    </div>
  );
}
