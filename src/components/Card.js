import PropTypes from "prop-types";
import React from "react";

const Card = (props) => {
  const card_id = props.card_id;
  const message = props.message;
  const likes_count = props.likes_count;

  return (
    <div className="card">
      <h1 className="card-title">{message}</h1>
      <section>
        <p className="likes">{likes_count}</p>
        <button
          className="like-button"
          onClick={() => props.addLike(props.card_id)}
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
  card_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  addLike: PropTypes.func.isRequired,
};

export default Card;
