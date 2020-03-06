import React from "react";

function Card(props){
    return(
        <div className= "card">
        <div className= "top">
        <h2 className="name">{props.user}</h2>
        {/* <img className="circle-img" src="https://picsum.photos/200" alt="winter-img"/> */}
        </div>
        <div className= "bottom">
        <p className="info"> {props.img}</p>
        <p className="info"></p>
        </div>
        </div>
        );
        }

        export default Card;