import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = (props) => {
  const cardComponents = [];
  for (const card of props.cards) {
    cardComponents.push(
      <Card>
        card_id={card.card_id}
        message={card.message}
        likes_count={card.likes_count}
        onUpdateLike={props.onUpdateCard}
      </Card>
    );
  }

  return <div className="card-list">{cardComponents}</div>;
};

CardList.propTypes = {
  cards: PropTypes.array,
  // cards: PropTypes.array.isRequired,
  // addLike: PropTypes.func.isRequired,
  boardID: PropTypes.number.isRequired,
  onUpdateLike: PropTypes.func,
};

export default CardList;
