import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board.js";
import BoardList from "./components/BoardList.js";
import Card from "./components/Card.js";
import CardList from "./components/CardList.js";
import NewBoardForm from "./components/NewBoardForm.js";
import NewCardForm from "./components/NewCardForm.js";

function App() {
  const data = {
    owner_id: 1,
    title: "hi",
    owner: "Amel",
  };

  return (
    <div className="App">
      <Board
        owner_id={data.owner_id}
        title={data.title}
        owner={data.owner}
      ></Board>
    </div>
  );
}

export default App;
