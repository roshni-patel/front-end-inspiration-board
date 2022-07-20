import PropTypes from "prop-types";
import React from "react";

const Board = (props) => {
  const boardID = props.boardID;
  const title = props.title;
  const owner = props.owner;

  return (
    <div className="board">
      <button
        className="delete-board"
        onClick={() => props.deleteBoard(boardID)}
      >
        Delete Board
      </button>
    </div>
  );
};

Board.propTypes = {
  boardID: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default Board;
