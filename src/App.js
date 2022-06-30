import "./App.css";
import Board from "./components/Board";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [boardsData, setBoardsData] = useState([])
  // useState([
  //   {
  //     boardID: 1,
  //     title: "get out of my swamp",
  //     owner: "Shrek",
  //     isSelected: false
  //   }
  // ]);
  useEffect(() => {
    getBoardsFromAPI();
  }, []) 


  const [isBoardFormVisible, setBoardFormVisibility] = useState(true)

  const getBoardsFromAPI = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        console.log(response.data)

        const boardsFromAPI = response.data.map(board => {
          return (
          { boardID:board.id,
            title:board.title,
            owner:board.owner,
            isSelected:false
           }
          );

        })
        setBoardsData(boardsFromAPI);
      })
      .catch((error) => {
        console.log("ahhhhhhhh error");
      });
  };

  const makeNewBoard = (data) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, data)
      .then((response) => {
        getBoardsFromAPI();
      })
      .catch((error) => {
        console.log("ahhhhhhhh error");
      });
  };

  const makeNewCard = (cardData) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/cards`, cardData) // board = owner_id of selectedBoard
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
      <BoardList className="board-list"
      boardsData={boardsData}
      getBoardsFromAPI={getBoardsFromAPI}
      onUpdateBoard={updateBoardData}
      ></BoardList>
      <NewBoardForm className="board-forms"
      createNewBoard={makeNewBoard}
      isBoardFormVisible={isBoardFormVisible}
      ></NewBoardForm>
      <NewCardForm className="board-forms" handleCardSubmission={makeNewCard}></NewCardForm>
    </div>
  );
}

export default App;
