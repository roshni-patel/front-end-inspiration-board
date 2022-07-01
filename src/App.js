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
  const [cardsData, setCardsData] = useState([])
  const [selectedBoard, setSelectedBoard] = useState(null)

  useEffect(() => {
    getBoardsFromAPI();
  }, []) 


  // useEffect(() => {
  //   setSelectedBoard(selectedBoard);
  //   console.log(selectedBoard)
  // }, [selectedBoard])


  const onUpdateSelectedBoard = (id) =>{
    setSelectedBoard(id);
    getCardsFromBoard(id);
  }


  const [isBoardFormVisible, setBoardFormVisibility] = useState(true)

  const getBoardsFromAPI = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {

        const boardsFromAPI = response.data.map(board => {
          return (
          { boardID:board.id,
            title:board.title,
            owner:board.owner,
            // isSelected:false
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

  const getCardsFromBoard = (id) => {
    axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${id}/cards`)
    .then((response) => {
      console.log(response.data)
      setCardsData(response.data)
      console.log(cardsData);
    })
    .catch((error) => {
      console.log("error getting cards from board")
    });
  };

 // {boardSelect.id} ---> displays --> ? {boardSelect.title} "- " {boardSelect.owner} : ""

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
        {/* <CardList></CardList> */}
      </section>
      <div className="footer"></div>
    </div>
  );
};

export default App;