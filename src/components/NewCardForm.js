import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const defaultCard = { message: "" };

const NewCardForm = (props) => {
  const boardID = props.selectedBoard;
  const [cardData, setCardData] = useState(defaultCard);

  const onMessageChange = (event) => {
    const messageContent = event.target.value;
    setCardData({
      ...cardData,
      message: messageContent,
      boardID: boardID,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.handleCardSubmission(cardData);
  };

  return (
    <form onSubmit={submitForm}>
      <label>Message</label>
      <input
        name="message"
        type="text"
        value={cardData.message}
        onChange={onMessageChange}
      ></input>
      <input type="submit" />
      {/* <button className="create-card" onClick={() => submitForm()}>
        Submit
      </button> */}
    </form>
  );
};

NewCardForm.propTypes = {
  handleCardSubmission: PropTypes.func.isRequired,
  boardID: PropTypes.number.isRequired,
};

export default NewCardForm;
