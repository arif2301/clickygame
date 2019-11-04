import React from "react";
import "./style.css";

// function that prints out the images
function FriendCard(props) {
  return (
    <div className="card">
              <span onClick={() => props.score(props.id)} className="remove">
        <img alt={props.name} src={props.image} className= "card-img-top" />

        </span>

    </div>
  );
}


export default FriendCard;
