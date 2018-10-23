import React from "react";
import "./card.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img
        onClick={() => {
          console.log(props);
          return props.selectPicture(props.id)}}
          className={
            props.currentScore === 0
              ? "style_prevu_kit style_prevu_kit_ex"
              : "style_prevu_kit"
          }
        alt={props.name}
        src={props.image}
        key={props.id}
      />
    </div>
  </div>
);

export default Card;
