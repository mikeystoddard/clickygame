import React from "react";
import "./style.css";

const Navbar = props => (
 <div className="gameScore">
   <h2 className="score">Score: {props.total} </h2>
   <h2 className="message">{props.message}</h2>
 </div>
);
export default Navbar;