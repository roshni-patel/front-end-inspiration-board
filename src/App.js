// import "./App.css";
import "./components/App2.css";
import Board from "./components/Board";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [boardsData, setBoardsData] = useState([]);
  //MOVED TO Board.js
  // const [cardsData, setCardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [cardErrorMessage, setCardErrorMessage] = useState("");
  const [boardErrorMessage, setBoardErrorMessage] = useState("");

  useEffect(() => {
    getBoardsFromAPI();
  }, []);

  // useEffect(() => {
  //   setSelectedBoard(selectedBoard);
  //   console.log(selectedBoard)
  // }, [selectedBoard])

  const onUpdateSelectedBoard = (id) => {
    setSelectedBoard(id);
    // getCardsFromBoard(id);
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
        // console.log("ahhhhhhhh error");
        // console.log(error.response.data.details);
        setBoardErrorMessage(error.response.data.details);
      });
  };

  // const getCardsFromAPI = (boardID) => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${boardID}/cards`)
  //     .then((response) => {
  //       const cardsFromAPI = response.data.map((card) => {
  //         return {
  //           cardID: card.card_id,
  //           message: card.message,
  //           likesCount: card.likes_count,
  //           boardID: card.board_id,
  //         };
  //       });
  //       setCardsData(cardsFromAPI);
  //     })
  //     .catch((error) => {
  //       console.log("error getting cards from API");
  //     });
  // };

  //MOVED TO Board.js
  // const makeNewCard = (cardData) => {
  //   const boardID = selectedBoard;
  //   axios
  //     .post(
  //       `${process.env.REACT_APP_BACKEND_URL}boards/${boardID}/cards`,
  //       cardData
  //     )
  //     .then((response) => {
  //       getCardsFromBoard(boardID);
  //     })
  //     .catch((error) => {
  //       // console.log(error.response.data.details);
  //       setCardErrorMessage(error.response.data.details);
  //     });
  // };

  //MOVED TO Board.js
  // const getCardsFromBoard = (id) => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${id}/cards`)
  //     .then((response) => {
  //       setCardsData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("error getting cards from board");
  //     });
  // };

  //MOVED TO Board.js
  // const deleteCardFromBoard = (id) => {
  //   const boardID = selectedBoard;
  //   axios
  //     .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       const updatedCards = cardsData.filter((card) => card.cardID !== id);
  //       setCardsData(updatedCards);
  //       onUpdateSelectedBoard(boardID);
  //     })
  //     .catch((error) => {
  //       console.log("error deleting card");
  //     });
  // };

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

  const addLikeToCard = (cardID) => {
    const boardID = selectedBoard;
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardID}/like`, cardID)
      .then((response) => {
        onUpdateSelectedBoard(boardID);
        console.log("successfully added like to card!");
      })
      .catch((error) => {
        console.log("error adding like to card :(");
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

          {/* MOVED TO Board.js */}
          {/* DISPLAYS CARD FORM: only executes if selectedBoard is true */}
          {/* {selectedBoard && (
            <section>
              <h1>Create A Card</h1>
              <NewCardForm
                handleCardSubmission={makeNewCard}
                cardErrorMessage={cardErrorMessage}
              ></NewCardForm>
            </section>
          )} */}
        </section>
      </section>
      {/* MOVED TO Board.js */}
      {/* <section className="card-box">
        <h1 className="card-box-header">Card Box Placeholder</h1> */}
      {/* DISPLAYS SELECTED BOARD CARDS: only executes if selectedBoard is true */}
      {/* {selectedBoard && (
          <CardList
            boardID={selectedBoard}
            cards={cardsData}
            deleteCardCallback={deleteCardFromBoard}
            addLikeCallback={addLikeToCard}
          ></CardList>
        )} */}
      {/* <CardList></CardList> */}
      {/* </section> */}
      <div className="footer"></div>
    </div>
  );
}

export default App;
