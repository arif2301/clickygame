import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
              <span onClick={() => props.score(props.id)} className="remove">
        <img alt={props.name} src={props.image} className= "card-img-top" />

        </span>

    </div>
  );
}

// function FriendCard(props) {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-sm-3">
//           <span onClick={() => props.score(props.id)} className="remove">
//           <img alt={props.name} src={props.image} className="img-thumbnail" />
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

export default FriendCard;
//
//    