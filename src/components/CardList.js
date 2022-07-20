import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = (props) => {
  let cardComponents = [];
  if (props.cards) {
    cardComponents = props.cards.map((card) => {
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

  return (
    <div className="card-list">
      <button onClick={props.handleSortAlphabetically}>
        Sort Alphabetically
      </button>
      <button onClick={props.handleSortById}>Sort By ID</button>
      <button onClick={props.handleSortByUpvotes}>Sort By Upvotes</button>
      <section> {cardComponents}</section>
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  boardID: PropTypes.number.isRequired,
  deleteCardCallback: PropTypes.func.isRequired,
  addLikeCallback: PropTypes.func.isRequired,
};

export default CardList;
