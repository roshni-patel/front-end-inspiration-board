import PropTypes from "prop-types";
import React from "react";
import Board from "./Board";
import { useState } from "react";

const BoardList = (props) => {
  const onBoardTitleSelect = (id) => {
    props.onUpdateSelectedBoard(id);
  };

  const boardComponents = props.boardsData.map((board) => {
    return (
      <li key={board.boardID}>
        <Board
          boardID={board.boardID}
          title={board.title}
          owner={board.owner}
          isSelected={board.isSelected}
          onUpdateSelectedBoard={props.onUpdateSelectedBoard}
          getBoardsFromAPI={props.getBoardsFromAPI}
        ></Board>
        <button
          className="select-board"
          // onClick={() => (board.isSelected = !board.isSelected)}
          // onClick={() => onBoardTitleSelect(board)}
          onClick={() => onBoardTitleSelect(board.boardID)}
        >
          {board.title}
          {/* {console.log(board.isSelected)} */}
        </button>
      </li>
    );
  });

  return (
    <section>
      <h2 className="board-list-label">Boards</h2>
      <ul className="board-list">{boardComponents}</ul>
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
