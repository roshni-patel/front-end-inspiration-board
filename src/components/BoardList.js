import PropTypes from "prop-types";
import React from "react";
import Board from "./Board";
import { useState } from "react";
import axios from "axios";

const BoardList = (props) => {
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [cardsData, setCardsData] = useState([]);

  const getCardsFromBoard = (boardID) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${boardID}/cards`)
      .then((response) => {
        console.log("setting cards data!");
        setCardsData(response.data);
      })
      .catch((error) => {
        console.log("error getting cards from board");
      });
  };

  // const getCardsFromBoard = () => {
  //   axios
  //     // .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${id}/cards`)
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${boardID}/cards`)
  //     .then((response) => {
  //       setCardsData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("error getting cards from board");
  //     });
  // };

  // const boardComponents = props.boardsData.map((board) => {
  //   return (
  //     <li key={board.boardID}>
  //       <Board
  //         boardID={board.boardID}
  //         title={board.title}
  //         owner={board.owner}
  //         isSelected={board.isSelected}
  //         onUpdateSelectedBoard={props.onUpdateSelectedBoard}
  //         getBoardsFromAPI={props.getBoardsFromAPI}
  //         deleteBoard={props.deleteBoard}
  //       ></Board>
  //       <button
  //         className="select-board"

  //         onClick={() => onBoardTitleSelect(board.boardID)}
  //       >
  //         {board.title}
  //       </button>
  //     </li>
  //   );
  // });

  const onBoardTitleSelect = (id) => {
    // const selected = props.boardsData.filter((board) => board.boardID === id);
    // let selected;
    for (const board of props.boardsData) {
      // console.log(board);
      // console.log(`id: ${id}, boardID: ${board.boardID}`);
      if (board.boardID === id) {
        // console.log(`selected: ${board.boardID}`);
        // selected = (
        //   <Board
        //     boardID={board.boardID}
        //     title={board.title}
        //     owner={board.owner}
        //   ></Board>
        // );
        getCardsFromBoard(id);

        // console.log(`selected: ${board}`);
        console.log(board);
        setSelectedBoard(board);
        break;
      }
    }
  };

  const boardButtons = props.boardsData.map((board) => {
    return (
      <li key={board.boardID}>
        <button
          className="select-board"
          onClick={() => onBoardTitleSelect(board.boardID)}
        >
          {board.title}
        </button>
      </li>
    );
  });

  return (
    <section>
      <section>
        <h2 className="board-list-label">Boards</h2>
        <ul className="board-list"> {boardButtons}</ul>
        {/* <h1 className="board-title">{title}</h1>
      <button onClick={() => props.deleteBoard(boardID)}>Delete Board</button> */}
      </section>
      {/* <section className="board">{selectedBoard}</section> */}
      <section className="board">
        {selectedBoard && (
          <Board
            boardID={selectedBoard.boardID}
            title={selectedBoard.title}
            owner={selectedBoard.owner}
            deleteBoard={props.deleteBoard}
            cards={cardsData}
            setCardsCallBack={setCardsData}
            getCardsCallBack={getCardsFromBoard}
          ></Board>
        )}
      </section>
    </section>
  );
};

BoardList.propTypes = {
  boardsData: PropTypes.arrayOf(
    PropTypes.shape({
      boardID: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
  onUpdateSelectedBoard: PropTypes.func.isRequired,
  getBoardsFromAPI: PropTypes.func.isRequired,
};

export default BoardList;
