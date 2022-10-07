import { Board } from "./components/Board/Board";
import { Card } from "./components/Card";
import { Fight } from "./components/Fight/Fight";
import { Hand } from "./components/Hand/Hand";
import { Road } from "./components/Road/Road";

function App() {
  return (
    <div className="container mt-5">
      <Road />
      <hr />
      <Fight />
      <hr />
      <Board />
      <hr />
      <Hand />
    </div>
  );
}

export default App;
