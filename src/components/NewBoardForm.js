import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const defaultBoard = { boardID: 0, title: "", owner: "", isSelected: false };

const NewBoardForm = (props) => {
  const [data, setData] = useState(defaultBoard);
  const [isBoardFormVisible, setBoardFormVisibility] = useState(true);
  // NEXT STEPS:
  // make a button that when clicked sets isBoardFormVisible to false
  // when isBoardFormVisible value changes, display or hide the new board form

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
    props.createNewBoard(data);
  };

  const onVisibilityToggle = () => {
    setBoardFormVisibility(!isBoardFormVisible);
    console.log(`Board form visibility: ${isBoardFormVisible}`)
  }

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
      <button
        className="toggle-board-visibility"
        onClick={() => {onVisibilityToggle()}}
        >
          Hide New Board Form
        </button>
    </form>
  );
};

NewBoardForm.propTypes = {
  createNewBoard: PropTypes.func.isRequired
  // isBoardFormVisible: PropTypes.bool.isRequired
};

export default NewBoardForm;
