import PropTypes from "prop-types";
import React from "react";
import Card from "./Card.js";
import CardList from "./CardList.js";

//From the requirements, we can infer that each Board has a title,
//owner name, and board_id (as the hidden, implied primary key).

const Board = (props) => {
  const boardID = props.boardID;
  const title = props.title;
  const owner = props.owner;
  const isSelected = props.isSelected;


  return (
    <div className="board">
      <h1 className="board-title">{title}</h1>
      <CardList
        boardID={boardID}
        cards={[{ message: "hiii", card_id: 1, likes_count: 0 }]}
        // onUpdateLike={}
      ></CardList>
    </div>
  );
};

Board.propTypes = {
  boardID: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Board;
