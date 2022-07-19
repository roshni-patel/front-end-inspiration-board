import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./NewCardForm.css";

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
    setCardData(defaultCard);
    props.handleCardSubmission(cardData);
  };

  return (
    <div>
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
      {props.cardErrorMessage && (
        <p className="error"> {props.cardErrorMessage} </p>
      )}
    </div>
  );
};

NewCardForm.propTypes = {
  handleCardSubmission: PropTypes.func.isRequired,
  boardID: PropTypes.number.isRequired,
  cardErrorMessage: PropTypes.string.isRequired,
};

export default NewCardForm;
