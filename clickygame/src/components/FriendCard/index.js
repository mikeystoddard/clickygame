
import React from "react";
import "./style.css";


const FriendCard = props => (
    <div 
      className="picture" 
      value={props.id} 
      onClick={() => props.shuffleCards(props.id)}
    >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
        
      </div>
    </div>
  );
export default FriendCard;




  