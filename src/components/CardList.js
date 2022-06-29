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
        addLike={props.addLike}
      </Card>
    );
  }

  return <div className="card-list">{cardComponents}</div>;
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  addLike: PropTypes.func.isRequired,
};

export default CardList;
