import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = (props) => {
  console.log("cardData: ", props.cards);
  let cardComponents = [];
  if (props.cards) {
    cardComponents = props.cards.map((card) => {
      return (
        <Card
          cardID={card.card_id}
          boardID={card.board_id}
          message={card.message}
          likesCount={card.likesCount}
        />
      );
    });
  }

  // return <div className="card-box">{cardComponents}</div>;
  return <div className="card-list">{cardComponents}</div>;
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  // cards: PropTypes.array.isRequired,
  // addLike: PropTypes.func.isRequired,
  boardID: PropTypes.number.isRequired
};

export default CardList;
