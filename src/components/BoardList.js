import PropTypes from "prop-types";
import React from "react";
import Board from "./Board";

const BoardList = (props) => {
  const boardComponents = props.boards.map(board => {
    return (
      <li key={board.id}>
        <Board
        owner_id
        title
        owner
        ></Board>
      </li>
    )
  })
}

BoardList.propTypes = {
  
}

export default BoardList;
