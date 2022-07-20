import PropTypes from "prop-types";
import React from "react";
import CardList from "./CardList.js";
import { useState } from "react";
import axios from "axios";
import "./App2.css";
import NewCardForm from "./NewCardForm.js";

const Board = (props) => {
  const [cardErrorMessage, setCardErrorMessage] = useState("");

  const boardID = props.boardID;
  const title = props.title;
  const owner = props.owner;

  const cards = props.cards;

  const setCardsCallBack = props.setCardsCallBack;
  const getCardsCallBack = props.getCardsCallBack;

  const deleteCardFromBoard = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}`)
      .then((response) => {
        console.log(response.data);
        const updatedCards = cards.filter((card) => card.cardID !== id);
        setCardsCallBack(updatedCards);
        getCardsCallBack(boardID);
      })
      .catch((error) => {
        console.log("error deleting card");
      });
  };

  const makeNewCard = (cardData) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}boards/${boardID}/cards`,
        cardData
      )
      .then((response) => {
        getCardsCallBack(boardID);
      })
      .catch((error) => {
        setCardErrorMessage(error.response.data.details);
      });
  };

  const addLikeToCard = (cardID) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardID}/like`, cardID)
      .then((response) => {
        getCardsCallBack(boardID);
        console.log("successfully added like to card!");
      })
      .catch((error) => {
        console.log("error adding like to card :(");
      });
  };

  return (
    <div>
      {/* change this so when button is clicked title = "" */}
      <h1 className="board-title">{title}</h1>
      <button onClick={() => props.deleteBoard(boardID)}>Delete Board</button>

      <section className="card-box">
        <h1 className="card-box-header">Card Box Placeholder</h1>
        <CardList
          boardID={boardID}
          cards={cards}
          deleteCardCallback={deleteCardFromBoard}
          addLikeCallback={addLikeToCard}
        ></CardList>
      </section>
      <section className="card-form">
        <h1>Create A Card</h1>
        <NewCardForm
          handleCardSubmission={makeNewCard}
          cardErrorMessage={cardErrorMessage}
        ></NewCardForm>
      </section>
    </div>
  );
};

Board.propTypes = {
  boardID: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default Board;
