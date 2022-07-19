import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = (props) => {
  let cardComponents = [];
  if (props.cards) {
    cardComponents = props.cards.map((card) => {
      console.log(`card ${card.card_id}'s like count: ${card.likes_count}`)
      return (
        <Card
          cardID={card.card_id}
          boardID={card.board_id}
          message={card.message}
          likesCount={card.likes_count}
          deleteCardCallback={props.deleteCardCallback}
          addLikeCallback={props.addLikeCallback}
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
  boardID: PropTypes.number.isRequired,
  deleteCardCallback: PropTypes.func.isRequired,
  addLikeCallback: PropTypes.func.isRequired
};

export default CardList;
