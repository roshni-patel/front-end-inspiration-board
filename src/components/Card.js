import PropTypes from "prop-types";
import React from "react";
import axios from "axios";

const Card = (props) => {
  const cardID = props.cardID;
  const message = props.message;
  const likesCount = props.likesCount;
  
  //define addLike function

  return (
    <div className="card">
      <h1 className="card-title">{message}</h1>
      <section>
        <p className="likes">{likesCount}</p>
        <button
          className="like-button"
          onClick={() => props.onUpdateLikes(cardID)}
        >
          +1
        </button>
        <button className="delete-button" onClick="">
          Delete
        </button>
      </section>
    </div>
  );
};

Card.propTypes = {
  cardID: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  onUpdateLikes: PropTypes.func.isRequired
};

export default Card;
