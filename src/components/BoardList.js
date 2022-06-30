import PropTypes from "prop-types";
import React from "react";
import Board from "./Board";
import { useState } from "react";

const BoardList = (props) => {
  // const [seclectedBoard, setSelectedBoard] = useState(null)
  //every board list item should be a button, when its clicked set state^
  // const boardsData = props.getBoardsFromAPI();
  
  const onBoardTitleSelect = (id) => {
    // const updatedBoard = {
    //     boardID: board.boardID,
    //     owner: board.owner,
    //     title: board.title,
    //     isSelected: !board.isSelected
    // }
    props.onUpdateBoard(id);
  };

  
  const boardComponents = props.boardsData.map((board) => {
    return (
      <li key={board.boardID}>
        <Board
          boardID={board.boardID}
          title={board.title}
          owner={board.owner}
          isSelected={board.isSelected}
          onUpdateBoard={props.onUpdateBoard}
          getBoardsFromAPI = {props.getBoardsFromAPI}
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
      isSelected: PropTypes.bool.isRequired,
    })
  ),
  onUpdateBoard: PropTypes.func.isRequired,
  getBoardsFromAPI: PropTypes.func.isRequired
};

export default BoardList;
