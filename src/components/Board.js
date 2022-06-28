import PropTypes from "prop-types";
import React from "react";
import CardList from "./CardList.js";

//From the requirements, we can infer that each Board has a title,
//owner name, and board_id (as the hidden, implied primary key).

const Board = (props) => {
  const board_id = props.board_id;
  const title = props.title;
  const owner = props.owner;

  return (
    <div className="board">
      <h1 className="board-title">{title}</h1>
    </div>
  );
};

Board.propTypes = {
  board_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default Board;
