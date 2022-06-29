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
  const [boardsData, setBoardsData] = useState([
    {
      boardID: 1,
      title: "get out of my swamp",
      owner: "Shrek",
      isSelected: false
    }
  ]);

  const [isBoardFormVisible, setBoardFormVisibility] = useState(true)

  const getBoardsFromAPI = () => {
    axios
      .get("")
      .then((response) => {
        setBoardsData(response.data);
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

  const updateBoardData = updatedBoard => {
    // TO COMPLETE
  }

  return (
    <div className="App">
      <BoardList
      boardsData={boardsData}
      onUpdateBoard={updateBoardData}
      ></BoardList>
      <NewBoardForm 
      createNewBoard={makeNewBoard}
      isBoardFormVisible={isBoardFormVisible}
      ></NewBoardForm>
      <NewCardForm handleCardSubmission={makeNewCard}></NewCardForm>
    </div>
  );
}

export default App;
