import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import axios from "axios";
import { useState } from "react";

function App() {
  const boardData = {
    boardID: 1,
    title: "hi",
    owner: "Amel",
  };

  const [boards, setBoards] = useState([]);

  const getBoardsFromAPI = () => {
    axios
      .get("")
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => {
        console.log("ahhhhhhhh error");
      });
  };

  const makeNewBoard = (data) => {
    axios
      .post("", data)
      .then((response) => {
        getBoardsFromAPI();
      })
      .catch((error) => {
        console.log("ahhhhhhhh error");
      });
  };

  const makeNewCard = (cardData) => {
    axios
      .post("", cardData) // board = owner_id of selectedBoard
      .then((response) => {
        // getCardsFromAPI();
      })
      .catch((error) => {
        console.log("ahhhhhhhh error");
      });
  };

  return (
    <div className="App">
      <Board
        boardID={boardData.boardID}
        title={boardData.title}
        owner={boardData.owner}
      ></Board>
      <NewBoardForm handleSubmission={makeNewBoard}></NewBoardForm>
      <NewCardForm handleCardSubmission={makeNewCard}></NewCardForm>
    </div>
  );
}

export default App;
