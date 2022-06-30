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
  const [selectedBoard, setSelectedBoard] = useState(0)
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

  useEffect(() => {
    setSelectedBoard(selectedBoard);
  }, [selectedBoard])

  // const updateBoardsData = updatedBoard => {
  //   const boards = boardsData.map(board => {
  //     if (board.boardID === updatedBoard.boardID) {
        
  //       return updatedBoard;
  //     } else {
  //       return board;
  //     }
  //   });

  //   setBoardsData(boards);
  // }
  const updateBoardsData = (id) =>{
    setSelectedBoard(id);
  }


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



  return (
    <div className="App">
      <section className="header">
        <h1>Inspiration Board</h1>
      </section>
      <section className="boards">
        <BoardList
        boardsData={boardsData}
        getBoardsFromAPI={getBoardsFromAPI}
        onUpdateBoard={updateBoardsData}
        ></BoardList>
        <section className="board-forms">
          <h1>Create A Board</h1>
          <NewBoardForm
          createNewBoard={makeNewBoard}
          isBoardFormVisible={isBoardFormVisible}
          ></NewBoardForm>
          <NewCardForm 
          handleCardSubmission={makeNewCard}>
          </NewCardForm>
        </section>
      </section>
      <section className="card-box">
        <h1>Card Box Placeholder</h1>
      </section>
      <div className="footer"></div>
    </div>
  );
};

export default App;