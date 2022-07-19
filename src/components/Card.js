import PropTypes from "prop-types";
import React from "react";
import axios from "axios";

const Card = (props) => {
  const message = props.message;
  const likesCount = props.likes_count;

  //define addLike function
  const addLikeToCard = (cardID) => {
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_URL}cards/${cardID}/like`,
        cardID
      )
      .then((response) => {
        // STUCK ON WHAT TO ADD HERE
        console.log('successfully added like to card')
      })
      .catch((error) => {
        console.log('error adding like to card')
      });
  };

  return (
    <div className="card">
      <h1 className="card-title">{message}</h1>
      <section>
        <p className="likes">{likesCount}</p>
        <button
          className="like-button"
          onClick={() => props.addLike(props.cardID)}
        >
          +1
        </button>
        <button
          className="delete-button"
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
  onUpdateLike: PropTypes.func,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
