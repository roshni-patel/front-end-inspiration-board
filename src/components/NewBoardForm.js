import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./NewBoardForm.css";

const defaultBoard = { boardID: 0, title: "", owner: "", isSelected: false };

const NewBoardForm = (props) => {
  const [data, setData] = useState(defaultBoard);
  const [isBoardFormVisible, setBoardFormVisibility] = useState(true);

  const onOwnerChange = (event) => {
    setData({
      ...data,
      owner: event.target.value,
    });
  };

  const onTitleChange = (event) => {
    setData({
      ...data,
      title: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    setData(defaultBoard);
    props.createNewBoard(data);
  };

  const onVisibilityToggle = () => {
    setBoardFormVisibility(!isBoardFormVisible);
    console.log(`Board form visibility: ${isBoardFormVisible}`);
  };

  if (isBoardFormVisible) {
    return (
      <form onSubmit={submitForm}>
        <label>Owner</label>
        <input
          name="owner"
          type="text"
          value={data.owner}
          onChange={onOwnerChange}
        ></input>
        <label>Title</label>
        <input
          name="title"
          type="text"
          value={data.title}
          onChange={onTitleChange}
        ></input>
        <button
          className="create-board"
          // onClick={() => ()}
        >
          Submit
        </button>
        {props.boardErrorMessage && (
          <p className="error"> {props.boardErrorMessage} </p>
        )}
        <button
          className="toggle-board-visibility"
          onClick={() => {
            onVisibilityToggle();
          }}
        >
          Hide New Board Form
        </button>
      </form>
    );
  } else {
    return (
      <button
        className="toggle-board-visibility"
        onClick={() => {
          onVisibilityToggle();
        }}
      >
        Show New Board Form
      </button>
    );
  }
};

NewBoardForm.propTypes = {
  createNewBoard: PropTypes.func.isRequired,
  boardErrorMessage: PropTypes.string.isRequired,
};

export default NewBoardForm;
