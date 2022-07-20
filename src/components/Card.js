import PropTypes from "prop-types";
import React from "react";

const Card = (props) => {
  const message = props.message;
  const likesCount = props.likesCount;

  //define addLike function

  return (
    <div className="card">
      <h1 className="card-title">{message}</h1>
      <section>
        <p className="likes">{likesCount} 💗</p>
        <button
          // className="like-button"
          className="green-button"
          onClick={() => props.addLikeCallback(props.cardID)}
        >
          +1
        </button>
        <button
          // className="delete-button"
          className="green-button"
          onClick={() => props.deleteCardCallback(props.cardID)}
        >
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
  deleteCardCallback: PropTypes.func.isRequired,
  addLikeCallback: PropTypes.func.isRequired,
};

export default Card;
