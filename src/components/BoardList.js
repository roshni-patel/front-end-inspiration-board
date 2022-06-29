import PropTypes from "prop-types";
import React from "react";
import Board from "./Board";
import { useState } from "react";

const BoardList = (props) => {
  // const [seclectedBoard, setSelectedBoard] = useState(null)
  //every board list item should be a button, when its clicked set state^

  const boardComponents = props.boardsData.map((board) => {
    return (
      <li key={board.boardID}>
        <Board
          boardID={board.boardID}
          title={board.title}
          owner={board.owner}
          isSelected={board.isSelected}
          onUpdateBoard={props.onUpdateBoard}
        ></Board>
        <button
          className="select-board"
          onClick={() => (props.isSelected = true)}
        >
          title
        </button>
      </li>
    );
  });

  return (
    <section className="board-list">
      <h2>Boards</h2>
      <ul>{boardComponents}</ul>
    </section>
  );
};

BoardList.propTypes = {
  boardsData: PropTypes.arrayOf(
    PropTypes.shape({
      boardID: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    })
  ),
  onUpdateBoard: PropTypes.func.isRequired,
};

export default BoardList;
