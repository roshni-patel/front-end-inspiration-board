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

  const onBoardTitleSelect = (id) => {
    for (const board of props.boardsData) {
      if (board.boardID === id) {
        getCardsFromBoard(id);
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
      </section>
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
