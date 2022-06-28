import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board.js";
import BoardList from "./components/BoardList.js";
import Card from "./components/Card.js";
import CardList from "./components/CardList.js";
import NewBoardForm from "./components/NewBoardForm.js";
import NewCardForm from "./components/NewCardForm.js";
import axios from "axios";
import { useState } from "react";

function App() {
  const data = {
    owner_id: 1,
    title: "hi",
    owner: "Amel",
  };

  const [boards, setBoards] = useState([]);

  const getBoardsFromAPI = () => {
    axios.get('')
      .then((response) => {setBoards(response.data)})
      .catch((error) => {console.log('ahhhhhhhh error')});
  };

  const makeNewBoard = (data) => {
    axios.post('', data)
      .then((response) => {getBoardsFromAPI();})
      .catch((error) => {console.log('ahhhhhhhh error')});
  };

  return (
    <div className="App">
      <Board
        owner_id={data.owner_id}
        title={data.title}
        owner={data.owner}
      ></Board>
      <NewBoardForm
      handleSubmission={makeNewBoard}></NewBoardForm>
    </div>
  );
}

export default App;
