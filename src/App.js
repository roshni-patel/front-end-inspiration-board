import "./App.css";
import BoardList from "./components/BoardList";
import NewBoardForm from "./components/NewBoardForm";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  // const [cardErrorMessage, setCardErrorMessage] = useState("");
  const [boardErrorMessage, setBoardErrorMessage] = useState("");

  useEffect(() => {
    getBoardsFromAPI();
  }, []);

  const onUpdateSelectedBoard = (id) => {
    setSelectedBoard(id);
  };

  const getBoardsFromAPI = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        const boardsFromAPI = response.data.map((board) => {
          return {
            boardID: board.id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoardsData(boardsFromAPI);
      })
      .catch((error) => {
        console.log("error getting boards from API");
      });
  };

  const makeNewBoard = (data) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, data)
      .then((response) => {
        getBoardsFromAPI();
      })
      .catch((error) => {
        setBoardErrorMessage(error.response.data.details);
      });
  };

  const deleteBoard = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/boards/${id}`)
      .then((response) => {
        console.log(response.data);
        const updatedBoards = boardsData.filter(
          (board) => board.boardID !== id
        );
        setBoardsData(updatedBoards);
      })
      .catch((error) => {
        console.log("error deleting board");
      });
  };

  return (
    <div className="App">
      <section className="header">
        <h1>Inspiration Board</h1>
      </section>
      <section className="boards">
        <section className="selected-board">
          <h1>Selected Board Placeholder</h1>
        </section>
        <BoardList
          boardsData={boardsData}
          getBoardsFromAPI={getBoardsFromAPI}
          onUpdateSelectedBoard={onUpdateSelectedBoard}
          deleteBoard={deleteBoard}
        ></BoardList>
        <section className="board-forms">
          <h1>Create A Board</h1>
          <NewBoardForm
            createNewBoard={makeNewBoard}
            boardErrorMessage={boardErrorMessage}
          ></NewBoardForm>
        </section>
      </section>
      <div className="footer"></div>
    </div>
  );
}

export default App;
